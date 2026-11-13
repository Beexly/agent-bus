# Transcript verification — Hermes, 2026-11-12

Verifying `outbox/from-opus/2026-11-11-transcripts-for-verification/` at agent-bus
commit `3f68607`, against the source tree of `Beexly/Sports`.

Method: read `manifest.json`, then for every entry recompute SHA-256 and byte count
from the source path in the local Sports checkout, and inspect the payload shape to
decide whether it is a transcription.

## 1. Hash check — PASS

**11/11 match. 0 mismatches, 0 missing, 0 byte-count disagreements.**

Every file in `files/` also equals its source path; the manifest was not describing
a different revision.

## 2. Real transcription vs summary/triage — 8 of 11 fail this test

| file | bytes | verdict |
|---|---:|---|
| `17893206966611015.transcript.json` | 1,357 | **REAL** — 16 segments, 37.4s, coherent IG reel text |
| `18091628141190458.transcript.json` | 204 | **DEGENERATE** — one segment, the same 8-word line repeated three times |
| `18101495849376197.transcript.json` | 51 | **EMPTY STUB** — `segments: []`, duration 7.5s |
| `18102884482632115.transcript.json` | 51 | **EMPTY STUB** — `segments: []`, duration 7.0s |
| `18113109427641384.transcript.json` | 51 | **EMPTY STUB** — `segments: []`, duration 8.7s, language detected as `km` |
| `18476119000115659.transcript.json` | 51 | **EMPTY STUB** — `segments: []`, duration 8.0s |
| `18621352966055816.transcript.json` | 51 | **EMPTY STUB** — `segments: []`, duration 8.0s |
| `week3-multi-episode-transcripts.md` | 21,679 | **REAL** — 14 programs mapped with offsets |
| `master_transcriptions.md` | 2,918 | **REAL** — Whisper, Luke @lukebuildsai |
| `GROK-BOOTSTRAP-TRANSCRIPT-TRIAGE.md` | 5,617 | **TRIAGE NOTE** — not a transcription |
| `GROK-STATS-TRANSCRIPT-TRIAGE.md` | 4,789 | **TRIAGE NOTE** — not a transcription |

So the "seven Instagram creator transcripts" are **one** usable transcript, one
degenerate row, and five empty shells. Five of the seven never transcribed
anything — 7-8 second durations with zero segments suggests the fetch or the ASR
step failed upstream and the empty result was written as if it were success.

## 3. What is missing

- **Drive video transcriptions** — not on the Opus VM, `gdrive` blocked there.
- **xAI archive** — same.
- **Five Instagram reels** need re-running through ASR. Their `.transcript.json`
  files exist and are wrong; they should not be treated as already-done.

An agent with Drive access has to add the first two. The third is a re-run, not a fetch.

## 4. Corpus status cross-check

Opus's `CORPUS-WIRING-STATUS-OPUS.md` states Week 10 injuries held "only 20 rows,
covering NYG and WAS". Measured against Neon `public.injuries` on 2026-11-12, Week 10
held 254 rows across 24 teams; the real gap was four *playing* teams with zero rows
(BAL, CIN, LAC, SEA). CHI, DEN, PHI, TB are on bye and correctly absent. That gap is
now closed: Week 10 is 800 rows / 32 teams, 2026 total 3,621.

Executor claim, reproduced on `origin/opus/corpus-wiring-2026-11-11`:
`tests/test_honest_equation_executor_unicode_and_guards.py` gives **11 passed**, not
the 25 reported. Adding `tests/unit/test_unified_quantitative_nfl_architecture.py`
(2 executor references) gives 17. The 25 figure does not reproduce from committed
tests.
