# gse/preview-ci-status.md
## What it is (1-2 sentences)
Snapshot of Vercel preview/CI state for the GSE finish-line branch as of 2026-06-29 — docs-only pushes were skipped by the project's Ignored Build Step (CANCELED, not failed); the last READY preview reflects PR2-core only, production untouched.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; CI/ops state only).
## Data sources named
- Vercel project `sports-web` (`prj_ZAFYsTbVviP2iiSZdzQcloZVHkBL`, team `team_VvPIx69THeXYfjeG71taqnPo`); deployments `dpl_C1scCXG1BReNnhdWEvyQxr3womMy`, `dpl_AXZMAtozLUxiaKS8oNhLFuqEv6Rq`, `dpl_6MnfjEU2sbtLuTPxoJmp27V9nwYC`, production `dpl_DTeU1agCcdk4icZoFzXAsaVUcG6S`.
## Findings (numbers and facts, not vibes)
- Two docs-only pushes intentionally canceled by the ignore-build-step; the last READY preview (commit `c6dd911f`) predates the 13 hardening commits.
- Preview is Vercel-SSO-protected + `x-robots-tag: noindex`; auth was not bypassed.
- Production deployment at commit `9e739b38` unchanged; no production deploy occurred.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — CI/preview hygiene doc; no football content. (OTHER)
## Engine-actionable? (yes/no + one-line what)
No — ops state log with no engine relevance.
