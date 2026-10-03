# docs/ops/DEPENDENCY_AUDIT_D4_DIAGNOSIS_2026-09-04.md
## What it is (1-2 sentences)
Root-cause diagnosis (2026-09-04 re-audit) of four `dependency-audit` guard failures on manifest-unchanged heads: the script's staleness test equates "absent from one degraded npm audit response" with "fixed," producing false stale-waiver failures — a written hand-off to the guard's owner, not a fix.
## Key metrics/methods (formulas where given, else "not specified")
Mechanism: `stale = ACCEPTED.filter(a => !offenders.some(o => o.name === a.package))` at ~line 105 of `scripts/guardrails/dependency-audit.mjs`; `offenders` from ONE `npm audit --json --omit=dev` run. Fix: treat response as INDETERMINATE (exit non-zero / retry with backoff) if `report.metadata?.dependencies?.prod` missing/0 or vuln object absent; optionally record advisory range/title per ACCEPTED entry and only mark stale when response healthy AND advisory id absent.
## Data sources named
`npm audit --json --omit=dev` response (vulnerabilities map + metadata).
## Findings (numbers and facts, not vibes)
- The guard failed 4 times (waves 2, 3, 4, 5 on the 2026-09-04 night), all on heads with ZERO manifest/lockfile changes, with message: "2 stale waiver(s); the vulnerability is gone, so remove the entry: next, postcss."
- Same heads passed on 26/26 other runs (baseline, m1, m3, m4, m6, m7, final merged head; re-verified 10:26 CST, guards exit 0).
- Verified live during re-audit (10:32 CST): the advisory IS still present — vulnerabilities: {next, postcss}, next.severity = "high", metadata 280 prod deps.
- Mirror hazard: a degraded response can also HIDE a real new critical/high and silently pass the gate.
- Operational rule until fixed: red dependency-audit with "stale waiver" text on a manifest-unchanged head = degraded-audit false positive — note it, re-run, do not edit the ACCEPTED list.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: CI guardrail infra.
- TRUST-SIGNAL: false-positive guard behavior and its operational workaround (note, re-run, don't edit) is a trust/ops reliability signal.
## Engine-actionable? (yes/no + one-line what)
no — infra guardrail diagnosis; hand-off is to the owner of scripts/guardrails/dependency-audit.mjs.
