import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["*.test.ts"],
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true,
        execArgv: ["--require=/lib/wasm-polyfill.js"],
      },
    },
  },
});
