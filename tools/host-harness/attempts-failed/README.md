# Attempts that did not work — do not retry these

Kept so the next session does not spend an hour rediscovering that these
particular doors are walls. Each one was tried, and each is dead on this host.

## `vitest.hostfix.config.ts` — polyfill into the Worker

Thread `execArgv` gets `--require=/lib/wasm-polyfill.js` so the Worker has a
`WebAssembly` global at all.

**Result:** fixes `ReferenceError: WebAssembly is not defined`, and immediately
exposes the worse failure — the polyfill's `instantiate()` returns a hardcoded
llhttp stub, so `rollup/parseAst` gets garbage back and Vite reports
`invalid JS syntax` on provably valid files.

This is the shape of the trap: fixing the obvious error reveals the real one.

## `vitest.envshim.config.ts` — stub out `vite/dist/client/env.mjs`

A `load()` hook that returns `export default {}` for the Vite client env module,
on the theory that it is the module choking on the stubbed WASM.

**Result:** does not help. The consumer is `rollup/parseAst` (real WASM in
`node_modules/rollup`), not the Vite client env module. Stubbing the wrong
module is a clean no-op.

## `oxctest.mjs` — is esbuild's TS path healthy?

`esbuild.transform` on a trivial TypeScript snippet, plus `rollup/parseAst` on
trivial JavaScript, run side by side.

**Result:** worth keeping as the positive control that separates the two
subsystems. esbuild's TS transform is fine. `rollup/parseAst` is the thing
running on stubbed WASM. If you are diagnosing a parse failure, run this first
to find out which of the two you are actually looking at.

## Why none of this is in the working solution

The working approach is `vlog/` in the parent directory: run the real test files
under plain node with a hand-written `describe`/`it`/`expect` shim, rather than
trying to make a Vite-based runner work on a host where Vite's WASM dependency
returns a stub.
