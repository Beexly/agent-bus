# ops/INTEGRATIONS_FREE_STACK.md
## What it is (1-2 sentences)
The free-only integrations mandate (dated 2026-08-17): $0 spend, free tiers only, one tool per category, revoke everything else — with a live posture probe snapshot, a target ≤ 8-tool minimal active stack, an explicit revoke list of ~25 paid/duplicate integrations, and founder-only UI steps that cannot be automated.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Numbers (verbatim):
- Minimal active free stack target: **≤ 8 tools**
- Live posture (probed 2026-08-17): health `ok: true`, status healthy; ingestion recent SUCCESS; settlement healthy, **0 overdue**
- Product analytics: PostHog free (**5 events max**) or none
- Nova Act: free experimentation via `nova.amazon.com/act` API keys only; paid = **$4.75 / agent hour** on AWS Nova Act service — do NOT promote any GSE workflow to the paid service under the free-only mandate
- Revoke list includes: Mergify, extra AI connectors beyond 1–2, WakaTime, Pipedream (unless live free automations), Postman/Hoppscotch (if unused), Qodo/Qodo.ai, Google Cloud Build, HackerOne Code, Imgbot, Kilo Code Bot, Linear + Linear Code, Manus Connector, Azure App Service/Boards/Pipelines, Botpress Cloud, CircleCI, Codacy, coderabbitai, cto.new, GitKraken (if not daily), Snyk, Socket Security, SonarQube/SonarCloud, any second backend (Supabase/Railway/Render extras)
- Winners (KEEP): Vercel hobby, GitHub Actions, Dependabot (lean weekly, majors ignored, grouped — already configured), GitHub native secret scanning + push protection (enable), CodeQL, Neon free (one only), Codecov free/soft informational only (optional), max 1–2 AI coding apps (hard cap)

## Data sources named
- GitHub settings pages: github.com/settings/installations, github.com/Beexly/Sports/settings/installations, github.com/settings/applications
- Repo files confirmed already correct: `.github/dependabot.yml`, native GitHub Actions CI, CodeQL workflow, `docs/ops/cost-controls.md`, `runbook.md`

## Findings (numbers and facts, not vibes)
- Mandate: $0 spend; free tiers only; one tool per category; revoke everything else.
- Branch protection on `main`: require only free native CI checks (lint/type-check/build/secret-scan) — no paid-tool required checks.
- Do-not-do list: no new marketplace app with paid risk; no hard Codecov/Sonar/Snyk gates; no multiple AI coding apps; **no paid Odds key while the free path is the posture** (note: Garrett's later 2026-09-28 activation of the paid Odds API with 20K credits/mo CONTRADICTION-potential — the mandate said free path, but he later activated paid; memory confirms the paid account is active as of 2026-09-28).
- **Do NOT flip LIVE_BOARD / PUBLIC_PICKS / calibration gates** (explicit).
- Nova Act paid pricing noted to block accidental promotion ($4.75/agent hour).
- Founder-only UI steps cannot be automated: uninstall revoked apps at both user and repo level, prune OAuth apps to product-required ones only (GitHub OAuth, Vercel, Stripe if present, Neon/PostHog free if used), enable Dependabot alerts + security updates + secret scanning + push protection, confirm CodeQL on.
- Follow-up hook: after founder finishes UI revokes, paste remaining installed app names and the doc gets updated with the final locked list. UNCERTAIN whether that update ever happened.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **[OTHER — calibration/sizing governance]:** The explicit "do not flip LIVE_BOARD / PUBLIC_PICKS / calibration gates" is a standing guardrail on the publication and calibration lanes — relevant to any work touching public picks, because flipping those gates without Garrett's word violates a hard mandate. Serves the calibration/sizing lane as a hard constraint.
- **[OTHER — infra/cost]:** The "no paid Odds key while free path is the posture" line is CONTRADICTION-flagged against the 2026-09-28 fact that Garrett activated a paid Odds API account (20K credits/mo, $30/mo). The parent's read: the mandate predates the activation; the activation is a Garrett-directed override, but any new paid-key ask should cite this document's posture and get his explicit word. UNCERTAIN whether the free-stack doc was ever superseded.
- **[OTHER — operational cadence]:** "One tool per category" and the hard cap of 1–2 AI coding apps is the standing cost discipline behind the expensive-Sonnet-5.5 era (2026-09-30): every builder session now carries a spend lens. Serves the fleet/ops lane.

## Engine-actionable? (yes/no + one-line what)
**Yes** — standing constraint: no new paid tooling without Garrett's explicit override; before any live calibration or public-picks work, confirm the LIVE_BOARD/PUBLIC_PICKS/calibration gates are in their mandated state and the final locked integration list exists (it may never have been written).
