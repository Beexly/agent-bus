import { defineConfig } from "vitest/config";
const SHIM = {
  name: "env-shim",
  enforce: "pre" as const,
  load(id: string) {
    if (id.includes("vite/dist/client/env.mjs")) {
      return `export default {};\n`;
    }
    return null;
  },
};
export default defineConfig({
  plugins: [SHIM],
  test: { globals: true, environment: "node", include: ["*.test.ts"],
    pool: "threads", poolOptions: { threads: { singleThread: true, execArgv: ["--require=/lib/wasm-polyfill.js"] } } },
});
