# READY — Lima worker fleet up on the Windows box

Prepared 2026-11-10. Steps 1-3 of the fleet task are complete. **Stopped here as
instructed: waiting on the pilot shard package from Motif. No workers have been
spun up, no shard has been run, nothing scaled.**

The Jev paper pipeline was left running throughout and was not touched.

## 1. Host specs (measured, not estimated)

| item | measured value |
|---|---|
| CPU | 12th Gen Intel Core i7-1255U |
| cores / threads | 10 physical / 12 logical |
| total RAM | 31.7 GB (14.3 GB free at measurement) |
| GPU | Intel Iris Xe Graphics (integrated), 2 GB reported, shared |
| C: capacity | 475.9 GB total |
| C: free at install | 19.1 GB |
| C: free after both templates | 14.6 GB |
| other local volumes | none. G: is the Google Drive mount, not usable for VM disks |

**Concurrency cap on this box**, by the stated formula
`min(floor((RAM−8)/8), floor(cores/4))`:

```
min(floor((31.7−8)/8), floor(10/4)) = min(2, 2) = 2 full workers
```

## 2. Lima

| item | value |
|---|---|
| version | limactl 2.2.0 |
| backend | QEMU (WSL2 v2 present as well) |
| limactl path | `C:\Users\Garrett\AppData\Local\Microsoft\WinGet\Packages\Lima.Lima_Microsoft.Winget.Source_8wekyb3d8bbwe\bin\limactl.exe` |
| QEMU | `C:\Program Files\qemu` (must be on PATH; Lima fails with `qemu-img: executable file not found in %PATH%` if it is not) |

## 3. Templates

| template | vCPU | RAM | disk | OS | stack |
|---|---|---|---|---|---|
| `gse-worker` | 4 | 8 GiB | 40 GiB | Ubuntu 24.04.4 LTS | python 3.12.3, pdfplumber 0.11.10, poppler 24.02.0, tesseract 5.3.4, git 2.43.0 |
| `gse-worker-lite` | 2 | 4 GiB | 20 GiB | Ubuntu 24.04.4 LTS | python 3.12.3, pdfplumber 0.11.10, poppler 24.02.0, git 2.43.0, **no tesseract** (deliberate: an OCR shard cannot silently run here at reduced quality) |

Definition files: `C:\Users\Garrett\lima\gse-worker.yaml` and `gse-worker-lite.yaml`.
Verified inside the guest, not from the config file.

Both are currently running as the golden instances. Everything is installed ONCE at
template level; nothing gets installed inside a running worker mid-shard.

## 4. Staging folder

```
C:\Users\Garrett\lima\staging
```

Each worker writes exactly two files there: `<shard_id>.jsonl` and
`<shard_id>.done.json`. Shard inputs mount read-only from `C:\Users\Garrett\lima\shards\<shard_id>\`.

## 5. Worker rules in force

- one instance = one shard, created from the template, deleted when the shard ends
- inputs read-only; the worker cannot write to the masters or to another shard's files
- exactly two output files, in staging only
- a failed or interrupted shard is discarded WHOLE, never resumed or appended, and
  re-dealt to a fresh instance
- maximum 2 full workers concurrently on this box

## Flag before the pilot

Disk is the binding constraint, not CPU. The 40 GiB disk is sparse (a running worker
consumes ~1.7 GB of real host disk, not 40), so two workers fit comfortably in
14.6 GB free. But this machine cannot hold more than a handful of concurrent
instances, and it has no headroom for a large shard package landing on C: at the
same time. If the Drive shard package is large, mount it from Drive rather than
staging a copy on C:.

## Instance state

Both golden instances are **stopped** after baking so they hold no RAM while idle.
Start one with `limactl start <name>` when a shard is dealt.

*hermes 2026-11-10*
