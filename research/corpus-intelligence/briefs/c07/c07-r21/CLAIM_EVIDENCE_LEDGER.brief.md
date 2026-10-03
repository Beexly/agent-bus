# fable/evidence/CLAIM_EVIDENCE_LEDGER.md
## What it is (1-2 sentences)
A claim-evidence ledger that grades the highest-risk historical claims (from the OneNote/prompt/addendum lane plus current FABLE docs/code) into proven, partially proven, unsupported, false, blocked, needs-legal-review, or needs-owner-decision — described as a "downgrade machine" for claims. Machine-readable companion: `CLAIM_EVIDENCE_LEDGER.json`; verified via `npm run fable:evidence`.
## Key metrics/methods (formulas where given, else "not specified")
not specified — classification method, no formulas.
## Data sources named
OneNote / historical prompts (source of the original claims); the Sports repo docs and code (current evidence); AWS (rejected claims about live AWS resources).
## Findings (numbers and facts, not vibes)
Proven (6): source registry mapping; AWS gate default-off behavior; calibration surfaces; drift primitives; active-learning ranking; GitHub navigation. Partially proven (1): metric derivation inventory mapped to repo modules but still needs per-metric formulas and sample windows. Unsupported or false (8 claim groups): historical `legal cleared`; `.5+ gain`; `superior edge`; `parity+`; AWS-live; AWS-labeling-live; broad readiness language; complete competitive-edge claims. Blocked (1): MC Dropout implementation until an ML runtime is approved. Downgrade table highlights: `legal cleared` unsupported (source registry is not broad legal review); `superior edge`/`parity+` unsupported (no incumbent benchmark); `.5+ gain` unsupported (no replay report with CI); `Ground Truth Plus integrated` FALSE (no AWS labeling job/provider); `green cycles` false until all final commands pass; `official NGS-like parity` unsupported (no official tracking-data license proof); `full leverage complete` unsupported (AWS scored/gated, not live-complete).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the entire file — it records that no incumbent benchmark, replay CI, or tracking-data license exists, so any "edge" or "parity" claim is currently unsupported by construction.
## Engine-actionable? (yes/no + one-line what)
yes — this is the standing negative-evidence baseline: the engine must not repeat or republish `superior edge`, `parity+`, `.5+ gain`, or `NGS parity` claims until the ledger's stated proofs exist (reproducible benchmark, replay report with CI, license proof).
