# docs/ops/edge/2026-08-19-affiliate-tooling-verification/RESULTS.md
## What it is (1-2 sentences)
Ground-truth verification (dated 2026-08-19) of 21 affiliate-tooling candidates from a founder-pasted DeepSeek research summary, checked via GitHub API — confirming which repos are real, which match their descriptions, and which are fabricated.
## Key metrics/methods (formulas where given, else "not specified")
Verdict taxonomy: REAL_AND_MATCHES / REAL_BUT_EXAGGERATED / REAL_BUT_MISMATCHED / DOES_NOT_EXIST. Counts: 21 candidates checked → 3 real-and-matches (Refferq, Google Meridian, Dub), 10 real-but-exaggerated, 4 does-not-exist, plus 2 real-but-mismatched.
## Data sources named
GitHub API (direct repo checks + org enumeration + search API).
## Findings (numbers and facts, not vibes)
- REAL_AND_MATCHES: Refferq (https://github.com/Refferq/Refferq, 102 stars, last commit 2026-06-13, TypeScript), Google Meridian (github.com/google/meridian, 1,500 stars, 2026-08-18, Python — media mix modeling), Dub (github.com/dubinc/dub, 24,522 stars, 2026-08-19, TypeScript — link infrastructure).
- DOES_NOT_EXIST (confirmed hallucinations, 4 named): Income Generator Hub, SponsorFit, ClawMarketing/growth-os, xAmplify PRM, prathammahajan/affiliate-management-system (INFERENCE: file lists five names under "does not exist" though summary says 4 — counts inconsistent).
- Hallucination signatures confirmed: (1) hyper-precise unverifiable stats ($0-to-$4M claims, $20/mo costs, $16.02 projections) absent from all repos/docs; (2) plausible-sounding names that don't exist; (3) real repos misidentified by DeepSeek (e.g. "mangosqueezy" matched an unofficial Node client, not the SaaS platform); (4) inflated stats — most repos 0-23 stars, stale commits (Analytify 2021), or no license.
- Recommendation: none adopted without independent verification; the 8 does-not-exist claims are confirmed fabrications.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: revenue/affiliate tooling lane only — not engine-relevant; but the hallucination signatures are a standing QC pattern for vetting any DeepSeek/LLM-sourced tool claim (hyper-precise unverifiable stats = red flag).
## Engine-actionable? (yes/no + one-line what)
No — affiliate-tooling verification, no engine mechanics (except Google Meridian/Dub as tooling worth independent evaluation for the revenue lane).
