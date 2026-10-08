# PROOF

Date: 2026-10-08
Where: scratch bare remote and a throwaway tree. Not run against the historical inbox in Beexly/agent-bus.
Lead check: Motif. Orca and Hermes both `reports_to: motif`.

| Proof | Exit | Result |
|---|---|---|
| Clean bus commit | 0 | PASS |
| `sk_live_` under `bus/` | 1 | PASS, hook printed REJECT |
| `status.json` blob that still contains CR (filters bypassed) | 1 | PASS, hook printed REJECT CR |
| `git check-attr eol` on a CRLF `status.json` | n/a | PASS, `eol: lf` |
| Commit of that CRLF file, `git show` | 0 | PASS, object has no CR |
| First claimer push | 0 | PASS |
| Second claimer push | 1 | PASS, fetch first |
| Remote tree | n/a | PASS, only `bus/framefit/claimed/t1` |
| Diverging `--force` with `receive.denyNonFastForwards` | 1 | PASS, denying non-fast-forward |
| Hermes claims `desk` | 1 | PASS |
| Claim while `bus/FREEZE` exists | 1 | PASS |
| Runner `reports_to` is not motif | 1 | PASS |
| `schema_version` 2 | 0 | PASS, state `needs_human`, still in inbox |
| Accept missing `receipt` | 1 | PASS, moved to quarantine |
| Accept as Orca | 1 | PASS, not moved |
| Accept as Motif | 0 | PASS, handoff line `accepted_by: motif` |
| `status.py` | 0 | PASS, five buckets and `Lead: Motif` |
| `spend_guard.py` at 100%, called twice | 1, 1 | PASS, journal not written |
| Lint call | 1 | PASS |
| `agents/orca.yaml`, `agents/hermes.yaml`, `AGENTS.md` | n/a | PASS |

The CR hook uses `printf '\r'` because `$'\\r'` is not POSIX and the hook runs under `sh`. A normal `git add` of a CRLF file is cleaned by `.gitattributes` before the hook sees it. The hook is the backstop for a blob that skipped the filter.

Not proven on Garrett's machines: GitHub branch protection on the real default branch (attempted in this session, see HE-MUST.md), Telegram notify, Hindsight volume, `git commit -S`, Windows `core.autocrlf`.
