# docs/ops/edge/2026-08-19-affiliate-tooling-verification/RESULTS.md
## What it is (1-2 sentences)
A 2026-08-19 ground-truth audit of 21 affiliate/revenue-tooling repos from a founder-pasted DeepSeek research summary, checked via the GitHub API (existence, URL, stars, last commit, language), with each assigned a verdict of REAL_AND_MATCHES, REAL_BUT_EXAGGERATED, or DOES_NOT_EXIST.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Method: GitHub API direct repo checks + org enumeration + search API; verdict per repo.
## Data sources named
GitHub API (repo existence, star counts, last-commit dates, languages); founder-pasted DeepSeek research summary being audited.
## Findings (numbers and facts, not vibes)
- 21 candidates checked; **3 REAL_AND_MATCHES**: Refferq (102 stars, last commit 2026-06-13, TypeScript), Google Meridian (1,500 stars, 2026-08-18, Python), Dub (24,522 stars, 2026-08-19, TypeScript).
- Verdict table lists 14 REAL_BUT_EXAGGERATED and 5 DOES_NOT_EXIST rows (Income Generator Hub, SponsorFit, ClawMarketing/growth-os, xAmplify PRM, prathammahajan/affiliate-management-system) — INFERENCE: the summary prose in the same file says "10" and "4" respectively, and the recommendations section says "8" DOES_NOT_EXIST; the file's own prose counts are internally inconsistent with its own table.
- Confirmed hallucination signatures: hyper-precise unverifiable stats ($0-to-$4M claims, $20/mo costs, $16.02 projections) absent from every repo README; plausible-sounding nonexistent names; real repos misidentified (e.g., "mangosqueezy" matched an unofficial Node.js client, not the Mangopare SaaS platform); repos implying scale but with 0–23 stars or stale commits (Analytify: 2021-08-04).
- Recommendation: the 3 REAL_AND_MATCHES repos are worth evaluating on their own merits; none of the 21 adopted without independent verification of production readiness, security posture, and maintenance status.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: third-party vendor/affiliate-tooling vetting memo — no sports-content signal.
- TRUST-SIGNAL: documents a verified case of fabricated tool claims (DeepSeek-generated affiliate-research hallucinations) — cautionary for trusting unverified "tooling" research.
## Engine-actionable? (yes/no + one-line what)
No — revenue-tooling vendor audit; nothing about game prediction. (Usable only as a cautionary example of unverified AI research claims.)
