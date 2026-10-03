# docs/ops/INDEPENDENCE_GATES.md
## What it is (1-2 sentences)
An ops policy doc defining three revenue independence gates (Gate A: $1k MRR × 4 consecutive weeks; Gate B: $10k MRR × 8 weeks; Gate C: 1 paid B2B pilot) and a pre-Gate-A kill-list of work that should not ship, with an explicit carve-out that SRQC/formal-methods trust infrastructure is not a new vertical and remains in scope.
## Key metrics/methods (formulas where given, else "not specified")
- Gate A: $1k MRR for 4 consecutive weeks; Gate B: $10k MRR for 8 consecutive weeks; Gate C: 1 paid B2B pilot. Tracked live at `/admin/cash` via `apps/web/lib/growth/cash-os.ts` (`computeCashSnapshot` + `cashOsGreen`); consecutive-week streak is a human judgment call off the dashboard, not an automated streak counter.
## Data sources named
- `/admin/cash` dashboard (`apps/web/lib/growth/cash-os.ts`); `PULL_REQUEST_TEMPLATE.md` Independence check enforces the kill-list at PR review; SRQC work lives in `formal/`, `formal-heartbeat/`, `formal-regression/`, `apps/web/lib/ai-control-plane/**`.
## Findings (numbers and facts, not vibes)
- Until Gate A: no new product verticals; speculative infra banned; non-revenue-adjacent formal/research work not already committed banned (kill-list enforced via PR review).
- Explicit carve-out: SRQC/formal-methods work is "trust infrastructure for the existing product" (picks, receipts, AI control plane) — not a new product surface, not gate-blocked; reliability/correctness/trust work on existing surfaces is always in scope pre- or post-Gate A.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Ops/governance only — no football intelligence; defines what engineering work is allowed pre-revenue-gates.
## Engine-actionable? (yes/no + one-line what)
No — pure business-gating policy; only constraint is that engine wiring/calibration trust work stays allowed (the carve-out covers calibration honesty).
