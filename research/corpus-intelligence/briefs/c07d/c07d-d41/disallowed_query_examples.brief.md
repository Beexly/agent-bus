# fable/aws/clean-rooms-demo/DISALLOWED_QUERY_EXAMPLES.md
## What it is (1-2 sentences)
An 8-item enumerated list of query patterns that are disallowed inside the FABLE AWS Clean Rooms demo environment. It is a privacy/data-rights guardrail list, not a research document.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
None. The file references "partner data" and "private team records" generically without naming any actual source.

## Findings (numbers and facts, not vibes)
The file contains exactly 8 disallowed patterns, stated verbatim:
1. Joining on user identity.
2. Exporting row-level partner data.
3. Reconstructing bettor, athlete, or account behavior.
4. Querying below privacy threshold.
5. Using partner data for model training without explicit contract.
6. Exporting fixture rows below privacy threshold.
7. Inferring individual player health from private team records.
8. Using partner data to publish unsupported model-edge claims.

No thresholds, counts, dates, or quantitative parameters are stated anywhere in the file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Item 7 (inferring individual player health from private team records) — OTHER: a hard privacy red line directly adjacent to the injury-intake lane; any engine feature touching player health must source only from public/consented records. Serves the tracking lane and public/private surface doctrine (NGS doctrine / 2026-09-28 public-private HARD rule).
- Items 1, 3 (joining on user identity; reconstructing bettor/athlete/account behavior) — TRUST-SIGNAL: the FABLE program's forensic posture is evidentiary discipline, not adversarial data extraction; engine output claims must be sourced per the source-registry, never from re-identified behavioral reconstruction. Serves calibration/sizing (claims stay auditable).
- Items 5, 8 (no uncontracted model training on partner data; no unsupported model-edge claims) — TRUST-SIGNAL: reinforces the INGEST-AND-LEARN doctrine boundary — restrictive licenses mean learn-only, never commercial use or published edge claims. Serves the trust-target intake program (source-rights evidence required before any data feeds models or claims).
- No connections to QB-BEHAVIOR, COACHING, OL, or SCHEME. This file is pure governance, not football.

## Engine-actionable? (yes/no + one-line what)
yes — Enforce as a hard rule in any intake/wiring: never infer individual player health from private records, never publish edge claims without contract-backed source evidence.

## Referenced files/papers/datasets named
None. No external references.
