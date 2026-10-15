# G-02 Injury Pull Gate — production caller WIRED (Motif, 2026-10-15)

**Status: LANDED on branch, awaiting the standard merge gate. Not merged, not deployed.**

- Branch: `motif/g02-injury-pull-caller-2026-10-15` @ `49111f6` (parent = main `9a989b3`), Beexly/Sports.
- Closes the census finding (Oct 12 G-02 LANDED-NOT-WIRED; Oct 13 sweep downgrade): `intelligence/providers/injury_gate.py` had NO production caller on main — only `intelligence/gates/test_phase_wires.py` exercised it. A gate-checked caller existed stranded on unmerged branches (`fix/galaxy-odds-first-2026-10-08`, `grok/walk-forward-2026-10-14`); it is now landed on a main-based branch with its test battery.

## Files (remote-verified byte-for-byte after push)
- `intelligence/providers/pull_nfl_injuries.py` — production caller. Gate FIRST: `main()` calls `require_injury_published(week, now, friday)` before any network activity; refusal → message + exit 3, zero fetches. After the cutoff: keyless ESPN NFL injuries pull → compact per-team digest to `docs/data-sources/research/<date>/injuries/`. The caller supplies week + that week's Friday; the gate still does not guess the calendar.
- `intelligence/gates/test_injury_pull_caller.py` — (a) pre-cutoff: exit 3, gate's refusal, zero fetches, no file; (b) post-cutoff: output identical to ungated fetch+digest; (c) cannot-be-skipped regression: behavioral call-order + source-order assertions.
- `docs/gates/G-02-INJURY-PULL-CALLER.md` — wiring note: seam rationale + rejected alternatives.

## Guarantees kept
- The gate file is UNTOUCHED — blob `8020a44f` identical on branch and main. Semantics, failure mode (raise `InjuryNotPublished`), and tuning exactly as specced.
- Seam = the pull entry point (the spec guards a *pull*; "reading a committed file is not a pull"). Read/publish-path gating and external cron wrappers were considered and rejected — see the wiring note.
- Deltas vs the stranded copy are caller-only: added the missing `typing.Any` import; removed one dead no-op line + orphaned helper.

## Verification
- `python -m pytest gates/` from `intelligence/`: 7 passed (4 existing wire tests + 3 new).
- Live CLI smoke (Thu 2026-10-15, before the Fri 18:00 ET cutoff): week-7 pull REFUSED by the gate, exit 3, no fetch.

## Next (not this branch)
- Merge only via the standing gate: two-agent review + green CI + Garrett's migration runbook.
- Scheduling the weekly pull is an ops decision, deliberately not bundled.
