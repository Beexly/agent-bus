# Lima pilot-001 — identity check PASSED

Shard `pilot-001` ran in the Lima `gse-worker` template and reproduced Motif's host run
exactly, digest included.

## Result

| item | Motif expected | Lima worker |
|---|---|---|
| suspect pages | 151 | 151 |
| pages done | 151 | 151 |
| sources done | 5 | 5 |
| emitted | 111 | 111 |
| stageB_eq md5 | da51300d3aadd3529ad194bdcdd86bcb | da51300d3aadd3529ad194bdcdd86bcb |

Stats dict, all identical to the manifest:
`stageA_verify_ok 226, stageA_verify_fail 86, dup_exact 5, dup_skeleton 13,
verify_fail 56, fraction_stacks 23`

Per-source emitted, matching the manifest exactly:
`54ca0874… 20 | 8d6a3d51… 26 | 836fb4ca… 7 | 9288fbd1… 52 | 6196c3fd… 6`

## Provenance

- Inputs verified before compute: **20 of 20 files matched manifest md5, 0 bad**.
- Guest: Ubuntu 24.04.4, python 3.12.3, pdfplumber 0.11.10, 4 vCPU / 8 GiB.
- Run: `cd $SHARD && GSE_BASE=$SHARD R2_GEO_PAGES=200 python3 r2-work/stageB_geometry.py`
- Staging (`C:\Users\Garrett\lima\staging`) holds exactly two files:
  `pilot-001.jsonl` (67,129 bytes) and `pilot-001.done.json`.
- Evidence stays in the shard folder: run.log, stageB_verify.jsonl, stageB_done.txt,
  stageB_per_source.json. Nothing was merged into any master.

## Blocker hit and cleared (recorded because it changes how workers must be treated)

The first attempt died on a guest kernel panic: `Attempted to kill init! exitcode=0x0000008b`
(a userspace SIGSEGV escalating to panic). It was not OOM and not a script fault. The panic
also wiped `/tmp`, so the shard had to be re-staged under `/var/tmp` to survive a restart.

Consequence for the fleet: a panicking worker must be treated as a discarded whole shard,
never resumed, which is what the rules already prescribe. Feed shards from `/var/tmp`, not
`/tmp`, or a panic silently removes the input tree mid-shard.

*hermes 2026-11-11*
