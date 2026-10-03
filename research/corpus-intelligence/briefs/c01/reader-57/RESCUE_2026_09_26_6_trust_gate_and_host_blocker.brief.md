# research/2026-09-26/RESCUE-2026-09-26-6-trust-gate-and-host-blocker.md
## What it is (1-2 sentences)
A Hermes-authored rescue report from 2026-09-26 (to Garrett/Mimo) on PR #915 (Beexly/Sports, branch hermes/fix-trust-gate-surname): it fixed the trust gate's false positives on "Drew Lock"/"server-side lock" and added behavioral tests, while documenting that the authoring host cannot run the repo's vitest/tsc toolchain (a `--jitless` Node constraint with a fake WebAssembly polyfill).
## Key metrics/methods (formulas where given, else "not specified")
- No sports metrics; engineering: full-tree scan locally reproduced 21 hits, all in AGENTS.md, three false-positive classes (Drew Lock surname in verbatim social-post digests; "server-side lock" mutex prose; "guaranteed-valid structured outputs" adjective).
- New test suite: `node --test scripts/guardrails/trust-gate.test.mjs` → 7 passed, 0 failed (behavioral, throwaway-repo exit-code assertions with negative controls).
- Related rescues: #914 used 108 tests, #916 used 168 tests (incl. 28 hand-computed statistics pins) via a ~200-line vitest shim + esbuild pass under plain node.
- Trust-gate exemptions added: LOCK_PROPER_NOUN_SAFE_CONTEXT blanks Drew Lock/D. Lock/server-side lock; isVerbatimSocialDigestLine() skips banned.lock on lines with both @handle and ISO date in root memory docs only (packages/ still fails, asserted by test).
## Data sources named
GitHub PR #915 (https://github.com/Beexly/Sports/pull/915, draft), Beexly/Sports branch hermes/fix-trust-gate-surname, scripts/guardrails/trust-gate.test.mjs, GitHub Actions .github/workflows/ci.yml (ubuntu-latest, real Postgres) as the only real test gate.
## Findings (numbers and facts, not vibes)
- Trust gate (banned phrases on public copy) was failing on `main`, reddening every open PR even ones touching no marketing copy.
- Root cause: scan hit 21 times, all in AGENTS.md — verbatim social-post digests carrying the NFL passer Drew Lock's surname (Drew Lock, D. Lock, bare Lock in leaderboard lists), "server-side lock" (mutex prose), and an already-reworded adjective.
- The recursive async walk over apps/web dies silently (exit 0, no output) on this host — full-tree scan could not be completed; verified root-docs + packages/verifier at 0 hits (was 21); PR #915's CI still showed red at time of writing ("unproven," not failed).
- Host constraints: every node invocation is launched `--jitless --max-old-space-size=512 --no-lazy` (removes real WebAssembly); /lib/wasm-polyfill.js fakes globalThis.WebAssembly with a hardcoded llhttp stub → Vite import analysis fails ("invalid JS syntax") on provably valid files; any Vite-based runner is dead on this host.
- tsc lies: `tsc --noEmit` on a one-line file with an obvious type error exits 0 with empty output; TS API createProgram() is killed by the heap cap. Empty typecheck here means "killed," never "clean."
- Workarounds that work: plain-node vitest shim + esbuild pass; `node --test` for gates using it; GitHub Actions as the only real gate (npm ci, typecheck, lint, vitest on ubuntu-latest with real Postgres).
- Ask: fix is a node build WITH WASM (not --jitless) for test runs; nothing in the repo needs to change.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Drew Lock is an actual NFL passer (his surname is why the gate false-fired) → OTHER (infra/ops document; the only sports content is the surname mention itself).
## Engine-actionable? (yes/no + one-line what)
No — infrastructure/ops report with no sports intelligence; the only value is the host-toolchain constraint (no vitest/tsc on this host) for any future local test planning.
