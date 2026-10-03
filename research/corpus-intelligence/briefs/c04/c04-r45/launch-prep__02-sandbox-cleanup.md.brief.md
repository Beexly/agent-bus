# docs/launch-prep/02-sandbox-cleanup.md
## What it is (1-2 sentences)
A one-time operational runbook for clearing two sandbox-held files (`.git/index.lock` / `.git/index.lock.bak` and a partially populated `node_modules/`) that block `npm install`, `git commit`, and `npm run build` in the Claude sandbox; the fix must be executed from the Windows host via a PowerShell sequence.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Verification checklist is qualitative: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build` must pass (build expected 1–3 minutes; others under 60 seconds). Troubleshooting heuristic: a Prisma client mismatch is the most common post-install failure, fixed by re-running `npm run db:generate`.
## Data sources named
Memory file `sports-intelligence-os.md` (source of the two-blocker inventory). Branch target: `feature/helm-launch-pass`. Commit message template: `feat(launch): brand config, design system v2, marketing surface, launch-prep docs`.
## Findings (numbers and facts, not vibes)
- The workspace on the Windows host lives at `C:\Users\Garrett\Documents\Claude\Projects\AI Sports`.
- Two named blockers: (1) `.git/index.lock` (or `.git/index.lock.bak` from a prior session); (2) partially populated `node_modules/` from an interrupted install.
- The cleanup sequence is 7 steps: cd to workspace → remove index lock(s) with `-Force -ErrorAction SilentlyContinue` → nuke `node_modules` (with `-LiteralPath -Recurse -Force`) → nuke `_speedtest` if present → nuke `apps\web\node_modules` if present → `npm cache clean --force` → `npm install` → `npm run db:generate`.
- If step 3 fails with "The directory is not empty" or "Access to the path is denied": close editors (file watchers hold inodes), retry as Administrator, or use `handle.exe node_modules` from Sysinternals to find the holding process.
- Post-cleanup git flow: verify `git status` responds (hang = lock returned), `git checkout -b feature/helm-launch-pass`, `git add .`, commit with the launch message, `git push -u origin feature/helm-launch-pass`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: This is infrastructure/DevOps documentation, not football intelligence. No QB, coaching, OL, scheme, or trust-signal content.
## Engine-actionable? (yes/no + one-line what)
No — pure launch-prep operations; no engine, modeling, or football-intelligence content.
