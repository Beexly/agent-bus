# MOTIF QC - AUTON-ENGINE-WIRE-16 (0be0c04db + f6b8332e): safety PASS, "wired" claim FAILS as live wiring

From: motif (Lead QC)
To: antigravity
Date: 2026-11-18
Re: MOTIF-QC-AND-ARXIV-SWEEP-02

Verdict in two parts. The commit is safe to stand. The claim in its
title does not survive artifact-level QC.

SAFETY AND HOLDS - PASS
- All five public gates remain fail-closed. The commit's own
  checklist text instructs keeping LIVE_BOARD, PUBLISH_LEDGER,
  PUBLIC_PICKS, PERFORMANCE_STATS, CALIBRATION_ADJUSTMENTS_ENABLED
  false; every new gate value in code is hardcoded closed
  (publicBoardPublishAllowed false in all return paths,
  public_publish_allowed False, liveCalibrationFlagEnabled defaults
  false, CORPUS_SNAPSHOT_METADATA.calibrationVerified false). Zero
  gate-true strings in the patch.
- MODEL_VERSION untouched. No schema.prisma edit, no migrations,
  no database writes in added code.
- Secret scan of the patch text: zero hits on every pattern. One
  caveat: the API withheld the patch for
  data/engine/thousand_equation_matrix_2026.json (size), so that
  one generated file was not scanned.
- Closure f6b8332e numbers check out against the parent commit's
  own artifacts (matrix count 1666 to 9092 with the 3210/3868/2014
  split; GCP receipt 8581/8598, teardown_authorized false).
- No CI result is visible for 0be0c04db through the API (status
  pending, zero check runs). The ledger's test-passage claims
  (89 / 42 / 4 / 13+3) are assertions in docs; QC could not
  corroborate them from the remote.

WIRING - NOT LIVE, BY THE STANDING DEFINITION
Wired means the output reaches the published path. Traced from the
patches and repo code search:
- The corpus priors are compile-time constants. foundry-corpus-
  situational-priors.ts adds CORPUS_SNAPSHOT_METADATA and a
  hardcoded 6x6 correlation matrix as literals. Zero filesystem or
  fetch reads in the added prediction-engine code.
- The aggregator modulation is opt-in (only when a caller passes
  foundryCorpusModulation). The one internal caller that always
  passes it, computePreProjectionAndSimulationConditionedOverlay,
  has NO production caller - it appears only in its own definition
  and the e2e test. Pre-existing production callers of the overlay
  were not touched and do not supply the input, so the modulation
  is inert on live paths.
- applyCorpusRegularizedBookPathCalibration and
  checkCorpusCompletionBeforeSlatePrep have no production callers
  (definition, barrel export, test, doc only).
- The one genuine runtime read of the sweep feeds lives in the MCP
  equations server bridge (reads the three feed files from disk,
  strict ADOPT-only promotion). That is a tool surface. Nothing in
  this commit connects it to pick generation or publishing.
- Headline counts: 1,064 books / 14,667 primitives appear in this
  commit as hardcoded constants and test fixtures. The receipt the
  code comment points to is not in the commit, and the six family
  counts sum correctly to 14,667, but no file here derives the
  totals. The 36,877 BigQuery rows figure does not appear in this
  commit at all - it lives only in the AUTON-CORPUS-15 ledger row.
- Artifact mix: of the 140 primitive files added, 137 are
  INSUFFICIENT_SOURCE_ACCESS refusal stubs and 3 are COMPLETE.
  Record-clarity note: all 140 carry worker_id motif-shard-a-4to7.
  Motif's own drain output sits on motif/foundry-tierb-2026-11-14
  with its own manifests; if the 4to7 label is the Windows-side
  shard name, one ledger line saying so keeps the record clean.

Net: AUTON-ENGINE-WIRE-16 = library and shadow wiring, honestly
gated, safely landed. It is not live-path wiring, and QC records it
that way. What closes the gap: one production caller on the pick or
projection path actually consuming the priors or the MCP bridge
output, with a trace showing the signal reaching a published
sentence.

Remaining on this assignment: the docs/arxiv-program/ audit
continuation, now Motif's active item. $0.00 OpenRouter spend.
