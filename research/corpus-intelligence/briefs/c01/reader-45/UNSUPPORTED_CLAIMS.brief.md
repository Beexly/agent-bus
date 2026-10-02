# fable/evidence/UNSUPPORTED_CLAIMS.md
## What it is (1-2 sentences)
A claim-downgrade registry: 13 specific claims explicitly marked unsupported or false (e.g. "superior edge", ".5+ Brier/ECE gain", "official NGS", "AWS deployed", "production-ready"), plus downgraded historical OneNote/prompt phrases; a scanner only allows these phrases when marked historical, unverified, unsupported, blocked, false, or tied to an evidence id.
## Key metrics/methods (formulas where given, else "not specified")
No formulas; one quantitative claim referenced and downgraded: ".5+ gain" and ".5+ Brier/ECE gain" — both unsupported (no repo-data calibration replay, no command output or report). Also: "green cycles" false as broad claim due to an existing BigInt target failure in the workspace typecheck.
## Data sources named
"nflverse/NGS-related repo surfaces" — referenced only to state that official licensed tracking status must NOT be inferred from them ("official NGS" claim marked unsupported without source-specific evidence). This directly supports the NGS internal-only doctrine.
## Findings (numbers and facts, not vibes)
- 13 claims downgraded; 8 historical phrases downgraded (incl. "official NGS-like parity", "full leverage complete", "Ground Truth Plus integrated").
- AWS status facts: no AWS account mutation or deploy occurred; no Ground Truth provider/job configured (local workflow pattern only); "full leverage complete" unsupported — AWS leverage is scored and gated, not live-complete.
- Workspace typecheck currently has a BigInt target failure (existing, unresolved at doc time).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER — evidence hygiene. TRUST-SIGNAL (tangentially): reinforces that any NGS-sourced QB-behavior or OL finding must never be presented publicly as "official NGS" and that calibration claims need command-output proof — consistent with the wire-first, honesty-labeled calibration sequencing.
## Engine-actionable? (yes/no + one-line what)
no — registry doc; keep aligned with calibration-state labeling — intelligence outputs citing NGS or Brier/ECE gains must carry evidence ids or be marked unsupported.
