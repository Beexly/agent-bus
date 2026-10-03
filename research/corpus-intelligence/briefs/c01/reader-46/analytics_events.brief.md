# docs/gse/analytics-events.md
## What it is (1-2 sentences)
Internal no-op analytics event schema plan for the GSE waitlist/landing flow (PR1 scope: planning + storage schema only, no production KPI commitments) — seven events covering waitlist views/starts/submits, audit-offer clicks, transparency reads, claim-gate hits, and research-brief clicks.

## Key metrics/methods (formulas where given, else "not specified")
- No formulas; schema fields listed per event (event_id, ts, page, referrer, utm_*, copy_version, dwell_ms, triggered_text, brief_id, etc.).
- Metrics named: queue conversion intent ratio; form start→submission conversion; valid leads by source/role; research-intent conversion; number of draft pages blocked for claim risk.

## Data sources named
Sources are internal code paths: `apps/web/app/waitlist/page.tsx`, waitlist form begin, waitlist submit endpoint, marketing page CTAs, transparency/backtest section, content validation guardrail, decision-audit and transparency pages.

## Findings (numbers and facts, not vibes)
- No measurements yet — schema and gates only; explicit "no production KPI commitments."
- Owner gates of note: `claim_gate_hit` is a hard stop for banned claims (number of draft pages blocked for claim risk); `transparency_read` requires accurate backtest numbers, no fabricated values; `research_brief_clicked` content must follow `backtest-transparency.md` and `no-claim-rules.md`.
- Consent handling: waitlist events carry explicit consent + anonymous-vs-identified handling gates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None applicable to sports lanes. Tagged: OTHER (growth/instrument plumbing for the waitlist funnel; claim-gate metric is a claims-risk governance signal).

## Engine-actionable? (yes/no + one-line what)
No — growth analytics scaffolding only; no engine-usable football intelligence.
