# media/content-provenance-and-review.md
## What it is (1-2 sentences)
Binding doctrine defining content provenance — the documented chain from every published claim back to its original source — and the six-tier pre-publication review process for all Sports OS content types.
## Key metrics/methods (formulas where given, else "not specified")
Provenance chain (5 links): Published claim → Evidence Vault item → Source tier (T1–T6) → Source Acquisition Mesh entry → Original primary source. A claim is PROVENANCE-VALID only if every link can be reconstructed by a non-author operator; INVALID if: no Evidence Vault item, T5/T6 source as primary backing, evidence TTL expired, or source classified RED. Review tiers: T1 (pick cards/Brain answers, 6 steps incl. operator + owner approval for win-rate claims), T2 (Model Journal), T3 (Loss Room autopsies), T4 (Galaxy Almanac essays), T5 (social, lightweight record), T6 (video, full record). Win rate claim check requires ≥30 settled picks, defined window, model version. Failure severity: P0 (false win rate claim), P1 (false intelligence claim), P2 (attribution error/missing disclosure).
## Data sources named
Evidence Vault; Signal Ledger; Source Acquisition Mesh; Source Risk Register; claim governance scanner; source hierarchy tiers T1–T4 (per cross-ref docs/brain/source-hierarchy.md).
## Findings (numbers and facts, not vibes)
- No content may publish without a provenance record; intelligence claims without an evidence chain may not publish. [TRUST-SIGNAL]
- Evidence backed by a Tier 5 or Tier 6 source as primary backing is invalid for publication. [TRUST-SIGNAL]
- AI-assisted production must log tool used, what it produced, what the operator changed; "Claude wrote this" is never sufficient provenance. [TRUST-SIGNAL]
- Post-publication failure handling: content removed/corrected immediately; affected picks voided in Signal Ledger; P0 severity assigned to false win rate claims. [TRUST-SIGNAL]
- Codex audit item 4: no Brain answer may route Tier 5 sources into a pick evidence chain. [TRUST-SIGNAL]
- Forbidden: publishing AI-generated content without operator review and approval; omitting the provenance failure record when correcting content. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings above tagged TRUST-SIGNAL; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
Yes — the ≥30-pick sample gate and model-version-bound win-rate claim rules are calibration-claim guardrails the engine must enforce before any public performance statement.
