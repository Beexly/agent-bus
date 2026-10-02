# docs/ops/archive/root-museum/CODEX_FINISH_DEPLOY.md
## What it is (1-2 sentences)
A self-contained Codex prompt briefing the state of the Galaxy Sports Edge Vercel production deploy circa June 2026: a hung `vercel link` interactive prompt blocked CLI deploys, and the brief gives exact PowerShell recovery steps (kill hung process, pre-link via `.vercel/project.json`, `vercel --prod --yes`) plus build-failure runbooks and acceptance criteria.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Acceptance criteria: `https://galaxysportsedge.com` serves homepage with "Find the signal before the market moves." in hero; `node scripts/post-deploy-smoke.mjs --url=https://galaxysportsedge.com` prints "Result: all green. Ship it." (or N warnings OK); successful Production build visible in Vercel dashboard on branch `sports-intelligence-os-phase-9-ci`.

## Data sources named
Vercel project `sports-web` (id `prj_ZAFYsTbVviP2iiSZdzQcloZVHkBL`), team `pick-pilot-s-projects`; GitHub repo `Beexly/Sports` branch `sports-intelligence-os-phase-9-ci` at commit `fb0291d`; 26 Vercel env vars (NEXTAUTH_*, DATABASE_URL, GOOGLE_CLIENT_*, STRIPE_*, THE_ODDS_API_KEY, ANTHROPIC_API_KEY, NEXTAUTH_SECRET, CRON_SECRET, trust-gate flags); smoke script `scripts/post-deploy-smoke.mjs` (hits public routes, robots.txt, sitemap.xml, OG image, `/api/health`).

## Findings (numbers and facts, not vibes)
- The Vercel-for-GitHub webhook was not auto-triggering builds; pushes to `sports-intelligence-os-phase-9-ci` were not picked up — direct CLI deploy required.
- Recovery method: kill hung node/vercel processes, write `.vercel/project.json` with projectId + orgId (orgId fetched via `https://api.vercel.com/v2/teams?slug=pick-pilot-s-projects`), deploy with `"n`n`nn" | vercel --prod --yes --no-clipboard` to skip the interactive plugin prompt.
- Common failure modes documented: Prisma generate skipped (build command override empty in Vercel settings), missing env var at build time, TS strict-mode errors; fix-and-redeploy loop specified.
- Explicit constraints: don't touch env vars unless a build error demands it; don't change production branch back to `main`; don't paste secrets back into chat; don't commit `.vercel/project.json`.
- Root cause context: the `vercel.json` at repo root sets `buildCommand: cd ../.. && npm run db:generate && npm run build --workspace=@sports/web`, `installCommand: cd ../.. && npm install`, `rootDirectory: apps/web`; the prompt's fallback step forces the project root override by deploying from `apps/web`.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- vercel.json build command + rootDirectory override runbook: OTHER (deploy plumbing, superseded by later deploy state)
- "Don't touch env vars unless a build error demands it" constraint discipline: OTHER
- Smoke-test acceptance criteria pattern: OTHER — INFERENCE: deployment smoke checks are worth mirroring for engine-data pipeline deploys, but this file itself gives no engine signal

## Engine-actionable? (yes/no + one-line what)
No — historical deploy runbook from June 2026; no engine inputs, metrics, or methods.
