# product/trust-compliance-toolkit-spec.md
## What it is (1-2 sentences)
Phase 5 packaging specification for selling Galaxy's internal compliance tools (Claim Scanner, Promo Guard, Loss Room white-label, Evidence Registry) as a B2B monetization layer. It defines APIs, buyer personas, pricing sketch tiers, and go-to-market acceptance criteria.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. No formulas. Sketch pricing ranges: Claim Scanner $99-299/mo, Promo Guard $199-499/mo, Loss Room white-label $499-999/mo, Evidence Registry $299-799/mo, bundle $999-2499/mo, Enterprise $5k-50k/mo (per DEC-OPEN-B, owner-only). Claim scanner outputs green/yellow/red status with severity-flag spans; Evidence Registry assigns trustScore A-F.
## Data sources named
Internal: `apps/web/lib/promotions/guards.ts` plus Operator Registry; `/performance/losses` surface; `SourceSnapshot` + evidence-health computation in the Intelligence Graph; claim scanner built across Phases 2-4.
## Findings (numbers and facts, not vibes)
- Four products: Claim Scanner (per-scan pricing), Promo Guard (per-promo or monthly), Loss Room white-label (embedded iframe or subdomain, monthly), Evidence Registry (per-claim registration).
- Acceptance criteria 1-7 = shippable platform; criterion 8 = at least 3 paying customers across the 5 personas is the commercial gate.
- Open items: infra isolation (OPEN-TCT-1), pricing tiers unresolved (OPEN-TCT-2), rule-set customization Enterprise-only (OPEN-TCT-3), no open-sourcing (OPEN-TCT-4, default).
- License terms forbid using the tools to build a competing "transparent betting prediction service."
- Spec authored by Claude; Codex extracts package + builds API surface; pricing deferred to owner (Garrett).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the entire toolkit is the restraint-posture-as-product — claim scanner flagging unsupported/accuracy-percentage/profit-guarantee claims; Loss Room publishes settled losses; Evidence Registry is claim-attribution with trust scoring and freshness tracking. Directly maps to the 9.2 content gate and publishablePick=false doctrine.
- OTHER: Promo Guard enforces per-jurisdiction sportsbook promo compliance — relevant if GSE ever runs promos/affiliate copy; also a fifth revenue stream.
## Engine-actionable? (yes/no + one-line what)
Yes — evidence-registry pattern (claim -> sources -> trust score A-F + conflict detection + public proof URL) is directly reusable as GSE's internal pick-evidence audit trail, and the claim-scanner layer inventory (unsupported claims, banned vocab, certainty assertions) can serve as the automated QC pass on public picks before the approval desk.
