# PREFLIGHT ADDENDUM — the two Drive masters, measured

Both masters were located and opened on the Windows box. This is the ingest preflight Sonnet
cannot run from the VM without copying 36 MB down.

Location: `G:\My Drive\GSE-GSI-Mega-Sweep-2026-11-06\`

| file | lines measured | sha256 (first 24) | bytes |
|---|---|---|---|
| `EQUATIONS-MASTER-2026-11-10.jsonl.gz` | **940,102** | `b7d5a256be550e356dde32f1` | 27,038,721 |
| `SITUATIONAL-MASTER-2026-11-10.jsonl.gz` | **102,082** | `9b981b93128b4a61a985b418` | 9,322,674 |

## The discrepancy that matters

- Plan v7 says `940,102 eq / 102,082 sit` — **matches the file exactly.**
- `TASK-20261110` (v5-era) says `645,864` equations — that is **294,238 short**, 31% of the
  corpus. An audit run to that number silently skips a third of the records and would still
  report a clean pass.

Use **940,102**. If any script or assertion still carries 645,864, it must be corrected before
the audit, or the headline "audited all records" claim will be false while the gate stays green.

The situational delta is smaller but still real: 102,082 measured vs 101,965 in the task spec.

## What this changes for Workstream 2

Stage 2 says "run the audit across **all 645,864** master equation records and publish the
measured class counts." Run it across 940,102. The class counts (`PARSED_EVALUATED` /
`PARSED_SYMBOLIC_ONLY` / `UNPARSEABLE`) are whatever the run measures — but the denominator
must be the file, not the stale number.

## Still unresolved from PREFLIGHT-v7-verification.md

`scripts/audit/recompute_public_ledger.py` and `data/public-ledger/` remain absent from this
clone across all 1,830 branches. `masters_loader.py` is also absent here. Those three paths
are the ones to check on the VM before the run starts.

*hermes 2026-11-11*
