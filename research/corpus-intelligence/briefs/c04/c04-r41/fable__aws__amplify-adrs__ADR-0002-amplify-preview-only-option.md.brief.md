# docs/fable/aws/amplify-adrs/ADR-0002-amplify-preview-only-option.md
## What it is (1-2 sentences)
Architecture Decision Record deferring AWS Amplify branch-preview deployments to a future spike; it is an infra/deployment decision, not football intelligence.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
none
## Findings (numbers and facts, not vibes)
- Decision: "preview-only spike later" — Amplify deployment not approved.
- Value cited: branch previews, isolated demos, no production DNS change.
- Blockers listed: owner approval, cost cap, env var review, SSR compatibility test, source rights review for displayed data, GitHub auth or manual branch connection approval, rollback path preserving current host.
- Rollback: delete preview app after export of logs.
- Hard limits: no domain, no production traffic, no service role creation by Codex, no secret value copy by Codex.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Infra-only content; nothing football-related. OTHER
## Engine-actionable? (yes/no + one-line what)
no — deployment infra governance with no model/signal content.
