# fable/RISKS_AND_FAILURE_MODES.md
## What it is (1-2 sentences)
A 6-row risk register for the FABLE layer, each pairing a named risk with a concrete code-level mitigation (registry file, scanners, gate defaults, segment guard).
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
Code artifacts: `source-rights-registry.ts`, `apps/web/lib/fable/aws-gates.ts`, `assessSafeFootballSegmentParity`, `claim-scanner.ts` (apps/web/lib/fable/).
## Findings (numbers and facts, not vibes)
- 6 risks + mitigations: (1) source rights drift → tie source use to `source-rights-registry.ts`, not scattered docs; (2) metric proof inflation → require command output or replay reports before performance claims; (3) AWS cost activation by accident → `aws-gates.ts` defaults actions off, requires explicit env gates; (4) sensitive segment misuse → `assessSafeFootballSegmentParity` blocks non-football segments; (5) local labeling confused with vendor jobs → manifests are `provider: local` and `priced: false`; (6) docs becoming marketing copy → `claim-scanner.ts` scans for unsupported phrases outside code spans.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Risk 2 (proof inflation → require command output/replay) and risk 6 (claim-scanner against unsupported phrases) are the engine's anti-hype guardrails; risk 1 (rights drift) enforces the rights-boundary doctrine.
- [OTHER] Risk 3 is cost governance (default-off AWS gates); risk 5 is provenance labeling (local vs vendor jobs).
## Engine-actionable? (yes/no + one-line what)
No — risk register; actionable only as implementation checks for anyone touching FABLE code (wire rights registry, gates, claim scanner).
