# docs/ai/airwave/AIRWAVE_OPERATOR_RUNBOOK.md
## What it is (1-2 sentences)
Operator runbook for the Airwave Intelligence Intake system: a 10-step workflow for reviewing source readiness, importing manually-paraphrased transcript claims as CSV/TSV rows, reviewing them in a cockpit, and mapping approved claims into GSE pick evidence or GSN editorial outputs — with hard legal/rights gates and a strict never-publish list.
## Key metrics/methods (formulas where given, else "not specified")
- A row is `reviewReady` when: all 11 required columns are non-empty, `rights_status` is one of `owned`/`public`/`licensed`, and `operator_status` is `review` or `approved`.
- A row is `approved` when `operator_status = approved`.
- `mapClaimToAllOutputs(candidate)` (in `gse-gsn-output-map.ts`) maps one claim to GSE/GSN outputs plus `blockedReasons`.
## Data sources named
SiriusXM CH87 (held unless `AIRWAVE_SIRIUSXM_LEGAL_ACK=true`), YouTube feeds, podcast RSS, beat reports, studio handoff, The Odds API (paired with market-signal claims), founder personal notes / CH87 schedule (GSE's own output names), and operator-provided show blocks (`channel-87-schedule.ts`, validated by `validateShowBlock`).
## Findings (numbers and facts, not vibes)
- Import format: 12 columns (11 required + 1 optional); the CSV header lists 12 fields but the doc labels only 11 as "Required columns (all 11)" — `source_pointer` is the optional one and is never published.
- `claim_type` enum has exactly 15 values: injury_read, availability_read, role_change, ranking_tier, dfs_value, waiver_note, matchup_note, depth_chart_note, usage_trend, market_signal, odds_context, coaching_note, weather_context, unfalsifiable_hot_take, narrative_only.
- `confidence` values: EMPHATIC, LEAN, or HEDGED (three levels).
- `paraphrased_claim` is a hard paraphrase-only rule — verbatim quotes are never published.
- GSE gating: `UNFALSIFIABLE` claims cannot produce `pick_evidence_candidate`; injury reads require official corroboration before becoming pick evidence; market signals pair with live odds from The Odds API; all outputs sit in `REVIEW_QUEUE` until operator sets `PUBLIC_AFTER_REVIEW`.
- GSN gating: hot takes become `hot_take_ledger_candidate` only; narrative-only claims go to editorial research / guest topic tracker.
- Always-private fields: `source_pointer`/`clip_ref`/`file_path`, `review_notes`, full transcript text, speaker's raw quoted words, stream URLs or channel IDs — enforced by `redactClaimCandidateForPublic()`.
- Never published: auto-published anything (no auto-publish on any lane), SiriusXM stream content without legal ACK, unapproved claims, UNFALSIFIABLE claims as pick evidence, raw audio/transcript.
- Master env gates: `AIRWAVE_ENABLED`, `AIRWAVE_SIRIUSXM_LEGAL_ACK`, `AIRWAVE_TRANSCRIPT_IMPORT_ENABLED`, `AIRWAVE_TRANSCRIPT_FILE_PATH`, `AIRWAVE_YOUTUBE_FEEDS_ENABLED`, `AIRWAVE_PODCAST_RSS_ENABLED`, `AIRWAVE_BEAT_REPORTS_ENABLED`, `AIRWAVE_STUDIO_HANDOFF_ENABLED`.
- 5 useful endpoints listed (`/api/airwave/readiness`, `/api/airwave/intake-readiness`, `/api/airwave/intelligence-readiness`, `/cockpit/airwave`, `/airwave`); operator status advances draft → review → approved.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: `coaching_note` claim type (coaching-read intake signal).
- TRUST-SIGNAL: corroboration gates (injury reads need official sources before becoming pick evidence), UNFALSIFIABLE-claim hard blocks, paraphrase-only/never-publish rules, review-queue default.
- OTHER: off-field intake pipeline design — the 15-type claim taxonomy and EMPHATIC/LEAN/HEDGED confidence scale map directly onto the total-signal engine's off-field/player-signal intake schema.
## Engine-actionable? (yes/no + one-line what)
Yes — the 15-value `claim_type` taxonomy (injury_read, availability_read, role_change, coaching_note, market_signal, etc.) and the three-level EMPHATIC/LEAN/HEDGED scale are a ready-made intake schema the total-signal engine could adopt for its off-field player-signal intake.
