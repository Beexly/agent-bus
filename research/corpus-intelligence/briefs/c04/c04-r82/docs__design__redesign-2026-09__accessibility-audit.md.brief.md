# docs/design/redesign-2026-09/accessibility-audit.md
## What it is (1-2 sentences)
A grep-grounded accessibility audit of 9 public screens (Home, board/picks, pick detail, performance/calibration/proof/verify, pricing, methodology, fantasy lineup, stats, dashboard/sign-in) against the 2026-09 redesign brief's §7 spec, with every claim traced to file:line and unknowns labeled "unknown," not guessed. It is a site-QA document, not sports modeling research.
## Key metrics/methods (formulas where given, else "not specified")
- 12 checks per screen: skip link, focus styles, one-h1/heading order, landmarks, tables, chart text alternatives, reduced-motion, placeholder-as-label, color-only meaning, icon-only controls, mobile target size (≥44px), age gate.
- Totals: age-gate fail on 6 screens; focus-style fail on 1 screen-group (6 instances, all fantasy tools); landmark fails on 2 screens (dashboard no footer; sign-in no landmarks at all); skip-link fail on 1 (sign-in); keyboard-trap fail on 1 (EvidenceAuditDrawer lacks Tab constraint despite `aria-modal="true"`); 9 of 21 `components/motion/` files unverified against reduced-motion.
- Reduced-motion: global kill switch at `globals.css:52-59` (`prefers-reduced-motion` → all animations 0.001ms `!important`, overrides inline styles).
## Data sources named
None — repo code only (apps/web).
## Findings (numbers and facts, not vibes)
- Age gate contradicts the brief on 6 of 9 screens: `AGE_GATED_PREFIXES` (always-on, no env flag) gates /board, /picks, /performance, /pricing, /stats, all /fantasy/* while the brief says "no age gate... all ages." Conversely, `/room/[gameId]` (the only standalone game-detail page) is NOT gated while the pick list linking to it is.
- No dedicated pick-detail route exists: factor breakdown, receipt hash, verify button, and grade render inline inside the pick row on /picks; there is no `picks/[id]/page.tsx`.
- Calibration curve SVG's `aria-label` omits per-bucket expected/observed numbers; an adjacent accessible band-scrubber (`button aria-pressed` + `role="status" aria-live="polite"`) supplies Observed/Expected/Delta text per band instead.
- Six confirmed `focus-visible:outline-none` with no replacement in fantasy tools: lineup-optimizer.tsx:85, dfs-optimizer.tsx:82, bestball-board.tsx:107/115, draft-assistant.tsx:127/135.
- Win/loss/void rendering: `ResultBadge` always prints literal WIN/LOSS/PUSH/VOID text; pricing included/excluded uses distinct checkmark/X glyphs plus text; fantasy OUT toggle replaces projection with literal "OUT" text — color never carries meaning alone.
- Brief §5 violation (found by auditor): footer renders a "▶ Replay intro" link on every page despite the brief banning auto-playing intros and replay links.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No dedicated pick-detail route; receipt/verify render inline in pick row → OTHER (product surface)
- Age gate over-gating on board/picks/performance/pricing → TRUST-SIGNAL (record visibility friction)
- Calibration curve text-alternative handling → OTHER
## Engine-actionable? (yes/no + one-line what)
No — site accessibility QA; no engine modeling content.
