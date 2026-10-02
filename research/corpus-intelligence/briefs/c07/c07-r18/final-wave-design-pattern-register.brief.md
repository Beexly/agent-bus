# design/final-wave-design-pattern-register.md
## What it is (1-2 sentences)
Doctrine register of the 8 canonical UI/UX patterns for Sports OS — Pick Card, Evidence Drawer, Signal Ticker, Market Gravity Meter, Source Tier Badge, Confidence Score Display, Settlement Badge, Empty State — each with name, when-to-use, when-not-to-use, required/forbidden elements, and implementation path.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence Score Display tiers: 85–100 = `--ultraviolet` glow (high conviction), 65–84 = `--silver`, 0–64 = `--ash`; mandatory context label "Confidence is calibrated against historical results — not a guarantee of outcome".
- Minimum 30 settled picks in the model version's calibration set before a score is displayed (else "Calibrating — insufficient data"); never display 99/100 with <30 settled picks.
- Signal Ticker scroll speed 40–60px/s; no animation unless data changed in last 5 minutes.
- Source tier badges T1–T6 (T1 official/primary → T6 synthetic/AI-generated); win settlement only after T1-source confirmation.
## Data sources named
None (component references: `apps/web/components/public/PickCard.tsx`, `cockpit/EvidenceDrawer.tsx`, `ui/SourceTierBadge.tsx`, etc.).
## Findings (numbers and facts, not vibes)
- 8 patterns; Pick Card is the core intelligence output unit; Evidence Drawer is cockpit-only (never raw on public routes); Market Gravity Meter is explicitly NOT a "sharp money" indicator (must carry the "Market context — not a sharp money signal" label).
- Forbidden patterns list: lock icon on a pick, real-time win counter, "AI predicts..." headline, sportsbook-green action button, animated confidence score, fake "sharp money alert" badge.
- Codex audit requirements: confirm source-freshness disclosure on all public routes; confirm `showDisclaimer` defaults true; confirm no full-saturation casino green; report any lock icon as P1.
- Empty-state voice rules: "No active picks in the current window. Intelligence updates as markets open." — no "check back!" tout language, no fabricated placeholder picks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: confidence-score governance wrapper (calibration label, 30-pick minimum, no 99/100 below minimum); settlement badges only after T1 confirmation with muted colors; source tier badges (T1–T6) for evidence provenance; win-rate counters banned from pick cards; forbidden claim language patterns.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the ≥30 settled-pick minimum and mandatory calibration-disclaimer wrapper before any confidence score is displayed publicly.
