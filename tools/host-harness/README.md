# Host harness — running the Sports test suite on iSH

Recovered from `/tmp/vlog`, `/tmp/tsc` and `/tmp/logic` on 2026-09-26. These
scripts were the only way to get real evidence out of this host, and they were
one `rm` away from being gone. Preserved here, unmodified, so the next session
does not have to rediscover that the obvious tools are dead here.

## The problem

`vitest` and `tsc` both fail on this host, in two different and separately
diagnosed ways.

**`vitest` — `--jitless` removes real WebAssembly.** The runtime injects
`--jitless`, and `/lib/wasm-polyfill.js` then installs a *fake* `globalThis.WebAssembly`
whose `instantiate()` returns a hardcoded **llhttp** stub regardless of the module
bytes. `rollup/parseAst` is real WASM, so it receives the llhttp stub, returns a
garbage AST, and Vite reports `Failed to parse source for import analysis ...
invalid JS syntax` on files that are provably valid — `vite/dist/client/env.mjs`
compiles standalone.

Two escapes were tried and both fail:
- Dropping the polyfill inside the Worker → `ReferenceError: WebAssembly is not defined`.
- Passing `--no-jitless` to a Worker → `ERR_WORKER_INVALID_EXEC_ARGV`, not escapable.

Not fixable from vitest config. Any Vite-based runner (vitest / vite-node /
jest-vite) is dead here.

**`tsc` — dies silently, exit code 0.** `tsc --noEmit --strict` on a one-line file
with an obvious type error exits **RC=0 with empty output**. Via the TS API,
`createProgram()` returns nothing and the process dies at the next traced step; the
heap cap is ~587MB and jitless has no JIT. `createSourceFile` *does* work — the
failure is specific to `createProgram` / lib loading.

**The trap this creates:** an empty output from `tsc` on this host means *killed*,
not *clean*. Always run a positive control (a file with a known error) before
believing a clean result. A bare `EXIT=0` proves nothing.

## What is here

### `vlog/` — run the real vitest files under plain node

Rather than rewriting tests to a different harness (which produced three false
failures from my own wrong expectations), these run the repo's *actual* test
files:

- `vitest-shim.cjs` — a ~200-line `describe`/`it`/`expect` shim.
- `build.sh` — esbuild per-file `--bundle` with `--external:vitest`.
- `run-tests.cjs` — driver, plus a `node_modules/vitest` shim in a mirror tree.

Running the real tests is strictly better evidence than a hand-written harness
that only agrees with them.

Also here, used to settle specific questions rather than to run the suite:
`factgraph.js`, `holdout.js`, `joint.js`, `scorecard.js`, `stats.js`, `duel.js`,
`verify_verifier.cjs`, `di-alias.ts`, `reapply-trust-gate.py`, `tg-scan.sh`.

`vlog/di/` holds four extracted data-source modules
(`source-registry.js`, `nflverse-source.js`, `fetch-failover.js`, `no-store-fetch.js`).

### `tsc/` — scoped typecheck configs

A full-repo `createProgram` dies; a **scoped** file list works. `tsconfig.scoped.json`
sets `files: [...]` plus `paths` mapping `@sports/*` to `packages/*/src/index.ts`.
This is the missing tool an earlier note claimed did not exist.

The `baseUrl`/`files` entries still point at the old `/tmp/wt918/...` worktree
paths. **Repoint them at your checkout** — they were left as-is on purpose so the
failure mode is not disguised by an edit nobody can reproduce.

### `logic/` — transpile-and-run for isolated checks

`verify.cjs` / `verify2.cjs` execute the *real* ported logic (transpiled out of the
branch) to check fail-closed conformal behaviour, since vitest cannot run here.
`cms.cjs` / `taci.cjs` are the esbuild-transpiled inputs; `trace.cjs` traces.

## The other silent-death case

`scripts/guardrails/` full-repo walk also exits 0 with no output on this host —
it dies mid-async-walk. A positive control (inject a known banned phrase) also
returns 0, which is how you tell silent death from green. The workaround was a
bounded temp repo with the real script at `scripts/guardrails/`, real sibling
modules, and the real `apps/web/lib/positioning-vocab.json` — the script resolves
its vocab off its *own* path via `REPO_ROOT_STATIC`, not cwd. Proves both
directions in ~2s. `vlog/repo/` is that bounded fixture tree (docs/factors +
packages, no `node_modules`).

## Related

`inbox/from-hermes/RESCUE-2026-09-26-6-trust-gate-and-host-blocker.md` — the
handoff that first reported the toolchain blocker.
