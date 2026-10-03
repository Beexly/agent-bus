# docs/ops/archive/root-museum/CODEX_HANDOFF.md
## What it is (1-2 sentences)
A hand-off document written by Claude (Cowork mode) handing Garrett/Codex six execution blocks to run on his local Windows machine to launch galaxysportsedge.com — push code, switch Vercel production branch, paste env vars, sign up for Neon Postgres + Upstash Redis, redeploy, smoke test — because the sandbox could not delete `.git/index.lock` or commit/push.
## Key metrics/methods (formulas where given, else "not specified")
- Timing estimates per block: Block 1 (push) 5 min, Block 2 (Vercel branch switch) 30 sec, Block 3 (env vars) 5 min, Block 4 (Neon + Upstash signup) 15 min, Block 5 (redeploy) 1 min, Block 6 (smoke test) 3 min — ~30 min total launch sequence.
- Infra recipe (not specified as formulas): Neon Postgres project `pickpilot-prod`, region US East (Ohio) matching Vercel `iad1`; Upstash Redis `pickpilot-queue`, region us-east-1, TLS `rediss://` URL; env vars `DATABASE_URL` (pooled), `DIRECT_URL` (direct), `REDIS_URL`; Vercel production branch switched from `main` to `sports-intelligence-os-phase-9-ci`; redeploy with "Use existing build cache" unchecked.
- Smoke-test checklist: 8 checks (homepage, methodology, picks, observatory, vault, footer socials, `/api/health` JSON, Google OAuth sign-in).
- Post-launch follow-ups named: Round 1 social posts from `social/launch-day.md` (X/IG/Threads/FB), Canva assets spec (4 graphics, 15 min each), rotate Anthropic API key next day, gate-flipping cadence in `LAUNCH_TONIGHT.md` days 7–30.
- No quantitative models, formulas, or sports metrics present.
## Data sources named
None (infra-only doc). Referenced artifacts: `VERCEL_ENV.txt`, `.launch-secrets/secrets.env`, `LAUNCH_TONIGHT.md`, `social/launch-day.md`.
## Findings (numbers and facts, not vibes)
- Git identity configured as `pickpilotapp@gmail.com` / "Garrett Baxley"; target repo `Beexly/Sports`; branch `sports-intelligence-os-phase-9-ci`; commit message "Launch night: galaxysportsedge.com domain wiring, /about /press /observatory /vault, social row, SEO, OG image".
- Three env values were still `PASTE_…_HERE` placeholders at hand-off time.
- Expected behavior notes: first Vercel build will fail (env vars not set yet) — expected, ignore; Picks page will show "No picks published" — expected, ingestion not run.
- Sandbox blockers: Windows ACL blocked `.git/` writes; bindfs `index.lock` deletion failed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — launch-night infra procedure; historical snapshot of the original site launch sequence and branch name lineage (`sports-intelligence-os-phase-9-ci`).
## Engine-actionable? (yes/no + one-line what)
No — archived launch procedure, no reusable model content; the branch name and commit history are reference only.
