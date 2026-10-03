# ops/archive/root-museum/CODEX_FINAL.md
## What it is (1-2 sentences)
A self-contained final-mile deployment runbook (code/paste into Codex/ChatGPT) for launching galaxysportsedge.com: Cloudflare DNS → Vercel domain verification, env-var updates, Google OAuth redirect updates, CLI deploy, and post-deploy smoke test.
## Key metrics/methods (formulas where given, else "not specified")
- Smoke test (`scripts/post-deploy-smoke.mjs`): all 13 public routes return 200 and contain expected brand strings; checks robots.txt, sitemap.xml, OG image, `/api/health` JSON, security headers; scans rendered HTML for banned phrases ("lock-of-the-day", "sure thing", etc.).
- Launch acceptance: 200 on `https://galaxysportsedge.com`, smoke test green, first social post live.
## Data sources named
None sports-related. Infrastructure: Cloudflare (Zone `a6533da632c41c348b918fb4b0e25795`), Vercel project `sports-web` (id `prj_ZAFYsTbVviP2iiSZdzQcloZVHkBL`, team `pick-pilot-s-projects`), Google OAuth client `96558622288-e7csm4hg6vvbn8nlg1b1aatpt7tbn9f8.apps.googleusercontent.com`, DNS targets `ab97365c55901869.vercel-dns-017.com` (apex), `cname.vercel-dns.com` (www), TXT `vc-domain-verify=galaxysportsedge.com,d1f25b46fcba42caa741,dc`.
## Findings (numbers and facts, not vibes)
- 26 Vercel env vars set; 2 needed domain updates (`NEXTAUTH_URL`, `NEXT_PUBLIC_APP_URL` still pointed at old `pickpilotapp.bet`).
- Repo state at the time: branch `sports-intelligence-os-phase-9-ci`, HEAD `fb0291d`, ~50 uncommitted brand-pivot files; production branch set to `sports-intelligence-os-phase-9-ci`; deploy was blocked on DNS pointing (both domains showed "Invalid Configuration").
- DNS proxy gotcha: records must be "DNS only" (gray cloud), not orange-cloud, else SSL handshake errors with Vercel's own termination.
- Note: Anthropic API key was visible in session transcripts; runbook included a rotate step.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Pure infrastructure/deploy runbook — no sports intelligence. One trust-note: banned-phrase compliance scan in the smoke test aligns with the AGA "no sure thing" doctrine.
## Engine-actionable? (yes/no + one-line what)
No — historical deploy artifact; DNS/env values are stale (July 2026), do not reuse without re-verification.
