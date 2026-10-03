# design/stitch-agent-workflow.md
## What it is (1-2 sentences)
A doctrine-only design spec for a "Stitch Agent" that composes design tokens + content templates + evidence-vault data + brand config into draft artifacts (pick cards, Model Journal entries, Loss Room autopsies, Galaxy Studio social content, research briefs, methodology pages) with claim-governance and brand-safety checks before human review. Status is doctrine only — no implementation, and it requires operator approval before execution; nothing may auto-publish.
## Key metrics/methods (formulas where given, else "not specified")
- Nine-step processing pipeline: select template → fetch evidence (abort if insufficient) → inject tokens → compose draft → claim-governance scan (flag on fail) → brand-safety linter → queue for operator review → operator approves/rejects/edits → publish.
- Evidence sufficiency rules: no draft when the evidence vault has no Tier 1 or Tier 2 items for the claim, all evidence exceeds TTL, the claim type needs Tier 1 but only Tier 5 is available, or the pick has status WITHHELD.
- Hard numeric rules: do NOT generate performance stats from fewer than 30 settled picks; Model Journal requires at least 5 weekly settled picks; never cite Tier 5 signals as evidence in public drafts.
- Claim-governance scanner checks: forbidden certainty language, sharp-money claims without Tier 1/2 backing, win-rate claims without defined model version and window, fabricated specificity, sportsbook/tout vocabulary (locks, guaranteed, sure thing).
- Brand-safety linter checks: no first-person author voice, no Garrett Baxley name surface, no version strings in public output, no placeholder copy, no semantic warning colors as decoration.
## Data sources named
- Evidence Vault (T1–T4 tiers), Signal Ledger (pick and settlement history), design tokens (DESIGN.md YAML), brand config (lib/brand.ts), content templates, claim governance rules (docs/brain/claim-governance.md), compliance scanner rules (apps/web/lib/compliance-scanner/rules.ts).
## Findings (numbers and facts, not vibes)
- All stitch outputs are draft-only; validation expectations include Signal Ledger DRAFT_QUEUED events for all stitch outputs, logged ABORT events for thin-evidence cases, and an OPERATOR_APPROVED event on every published item.
- Approval gates table: template addition → operator; scanner rule modification → operator; auto-publish capability → owner; new output surface → owner.
- MVP path phases: (1) Model Journal cockpit trigger, (2) Loss Room autopsy on pick settlement, (3) social content drafts (Galaxy Studio panel), (4) pick card evidence summaries for PRO+.
- Forbidden actions include: no auto-publish without operator action, no thin-evidence drafts past step 2, no content for WITHHELD picks, no Tier 5-as-evidence in public drafts, scanner must never be disabled/bypassed, never generate stats from <30 settled picks, never call picks "proven" or "guaranteed", never scrape external sites — all evidence from the registered Source Acquisition Mesh.
- Codex audit requirements: confirm no publish without operator gate, claim-governance scanner active on all template types, no Tier 5 citation, logged ABORTs, linter integrated; a template lacking claim-governance integration is P1.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (content-operations and claim-governance doctrine; governs how intelligence outputs become public copy, no football signal content itself).
## Engine-actionable? (yes/no + one-line what)
No — it is an unimplemented content-ops doctrine; the engine-actionable hooks (evidence tiers, Signal Ledger events) would live in existing code, not this file.
