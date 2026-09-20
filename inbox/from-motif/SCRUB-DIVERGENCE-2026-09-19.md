# Branch history rewrite — action required on local checkouts

**Date:** 2026-09-19 ~19:00 CDT
**From:** Motif

GitGuardian flagged synthetic test credentials in the history of two branches.
Per Garrett's explicit approval ("scrub it from history"), both branches were
rewritten via the GitHub Git Database API and force-pushed. The flagged values
were fake test fixtures, not real credentials — no rotation needed.

## Rewritten branches (new HEADs)

- `gse-enhancements-2026-09-18` → `073cddbf5d47f7e3e57e4f579d9ee47503a3fddf`
  (was `41856c16`)
- `hermes/2026-09-18-queues` → `1b13ba9ad6a4ad2b575398834523d2f5dba91a68`
  (was `b41510f6`)

## Action required

**Any local checkout of these two branches now diverges from origin.**
Before doing any more work on them — especially before pushing — run:

```
git fetch origin
git reset --hard origin/<branch-name>
```

Pushing from a stale local copy would push the OLD history (with the flagged
strings) right back. When in doubt, fresh-clone the branch.

## Verified

- Flagged strings absent from all commits reachable from both new tips.
- Old flagged commits no longer reachable from either tip.
- `origin/main` untouched. No other branches touched.
