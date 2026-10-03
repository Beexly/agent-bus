# ops/HERMES_AUDIT_CHARTER.md
## What it is (1-2 sentences)
A single paste-into-Hermes self-driving prompt for one unattended overnight run on branch `claude/fable-5-ultracode-plan-ptru4e`: Phase A (harden overnight artifacts to A++ on a tiny edit allow-list), then Phase B (exhaustive read-only adversarial security + correctness audit across 15 domains, findings only).
## Key metrics/methods (formulas where given, else "not specified")
Severity ranking = blast radius x exploitability x likelihood, tagged OWASP Top 10 + CWE; findings format: executive summary, severity histogram, top 10, per-finding blocks (OWASP/CWE, confidence confirmed|hypothesis, file:line + <=5-line quoted snippet, exploit scenario, blast radius, remediation sketch, effort S/M/L), coverage ledger, remediation roadmap (Now/Next/Later).
## Data sources named
None (code-only audit; repo's own guardrails as tools: guard:secrets, guard:openapi-security, guard:api-payload-rights, guard:api-v1-boundary, guard:ai-control-plane-sealing, guard:claude-api, guard:ai-transport-import-boundary, guard:draft-only, guard:trust, guard:no-raw-ngs, guard:performance-claims, guard:commercial-copy, guard:partner-offers, guard:affiliate-structural-separation).
## Findings (numbers and facts, not vibes)
- 15 audit domains D1-D15: auth/session/RBAC (NextAuth v5), Stripe billing, server-side paywall enforcement, secrets/config, Prisma/DB, input validation/injection/SSRF, Odds API free-first spend guard, pick lifecycle + grading integrity, scraping clearance + rights, AI control plane, supply chain, security headers/CSP/CORS/CSRF, rate limiting/DoS, logging/PII/responsible gaming, types + test coverage of critical paths.
- Prime directives: honesty over output (every claim carries file:line evidence or is labeled HYPOTHESIS); read-only in Phase B; never edit package.json, ai-control-plane, prisma, guardrails, .github, docs, sealed/DORMANT/frozen/owner-gated files, secrets, git config; no secrets in output (FILE:LINE + variable name only); two-strike rule (fail twice → revert, journal, move on); journal every step to handoff/OVERNIGHT_JOURNAL.md.
- Phase A may edit only: tools/model-advisor/**, cockpit/api-costs/** (T2), eval:prompts implementation + tests (T3), reports/**, new *.test.ts next to hardened code, handoff/**. No push, ever; morning review decides push vs `git reset --hard origin/...`.
- Security doctrine specifics named: webhook signature + idempotency for Stripe; SSRF guard on the remote-model client must block internal ranges + redirects; any captcha/login/paywall-bypass or proxy-rotation evasion primitives must not exist; forbidden certainty/tout language ("guaranteed", "lock", "risk-free").
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pick lifecycle + grading integrity (D8) and scraping clearance/rights (D9) domains define the audit surface for prediction-integrity — TRUST-SIGNAL (process-level trust posture, no game intelligence).
## Engine-actionable? (yes/no + one-line what)
No — agent-ops charter (how to run a hardening + security audit), no sports-intelligence content.
