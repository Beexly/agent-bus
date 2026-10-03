# fable/aws/AWS_AMPLIFY_INVESTIGATION.md
## What it is (1-2 sentences)
A decision-matrix investigation of AWS Amplify as a hosting option for the Next.js app, based on four official AWS docs pages; concludes with a "preview-only spike later" decision and explicit rejection of migration, DNS moves, and backend migration.
## Key metrics/methods (formulas where given, else "not specified")
not specified — qualitative 13-row decision matrix with risk levels (medium/high/low per dimension).
## Data sources named
Official AWS docs: amplify SSR support, server-side rendering, getting started with Next.js, troubleshooting SSR; repo artifact `infrastructure/aws/amplify`; learning artifact `docs/personal/aws/AWS_LEARNING_TO_REPO_ACTIONS.md`.
## Findings (numbers and facts, not vibes)
- Finding: app is Next.js → Amplify Hosting plausible for preview; Amplify supports SSR hosting for Next.js per official docs; official docs note Edge API routes are NOT supported by Amplify SSR hosting.
- Decision matrix (13 dimensions): no verified AWS/Vercel cost pressure (migration not justified); branch preview value medium (partner/demo review if GitHub auth + owner approval); auth/storage fit high risk (not Amplify-native → no backend migration); DNS risk high (no DNS action); env var risk high (no secret reads/prints); monorepo risk medium (workspace build may need custom app root); migration risk high (reject migration now); rollback path low risk (keep current host as source of truth).
- Current decision: preview-only spike later; current implementation: zero-cost local skeleton under `infrastructure/aws/amplify`; rejected for now: full migration, backend migration, DNS move, service role creation, env copy.
- Adoption triggers: owner requests AWS-hosted partner/demo preview AND GitHub auth available AND cost ceiling approved AND rollback keeps current hosting untouched.
- Still blocked: live Amplify app creation, GitHub connection, service role creation, env copy, DNS changes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Infrastructure: no hosting migration without verified cost pressure — keeps Vercel/Neon as the path; Amplify remains a gated preview option only.
- [OTHER] Cost governance: explicit adoption triggers (owner request + auth + cost ceiling + safe rollback) are the template for infra decisions.
## Engine-actionable? (yes/no + one-line what)
No — no live AWS action approved; only the zero-cost local skeleton and the learning artifact continue.
