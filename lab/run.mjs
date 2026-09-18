#!/usr/bin/env node
/**
 * lab/run.mjs - run a validation job on rented compute.
 *
 *   node lab/run.mjs <job-id> --dry-run    resolve, print the plan, spend nothing
 *   node lab/run.mjs <job-id>              execute (needs the CLI and NOVITA_API_KEY)
 *
 * Zero dependencies. Shells out to the `novita` CLI, which is the only supported
 * surface: Novita documents an SDK and a CLI and no REST API, checked 2026-09-18.
 *
 * SAFETY, in order of how badly it bites:
 *   1. A spec without maxSeconds is REFUSED. At ~$0.0000456/s a stuck sandbox is
 *      the only realistic way to lose the whole credit.
 *   2. Teardown runs in a finally block, so a crash still deletes the sandbox.
 *   3. --dry-run is the default posture for anything new and spends nothing.
 *   4. The key is read from the environment and never printed, logged or passed
 *      as a CLI argument, because arguments are visible in the process table.
 */

import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const JOBS = join(HERE, "jobs");

// Verified 2026-09-18 from https://docs.novita.ai/guides/sandbox-pricing.md
const USD_PER_VCPU_SECOND = 0.0000098;
const USD_PER_GIB_SECOND = 0.0000032;
const FOUNDER_APPROVAL_SECONDS = 4 * 3600;

const fail = (msg, hint) => {
  process.stderr.write(`${msg}\n`);
  if (hint) process.stderr.write(`${hint}\n`);
  process.exit(1);
};

function loadSpec(id) {
  const path = join(JOBS, `${id}.json`);
  if (!existsSync(path)) {
    const known = existsSync(JOBS)
      ? readdirSync(JOBS).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
      : [];
    fail(`No job "${id}".`, `Known jobs: ${known.join(", ") || "(none)"}`);
  }
  let spec;
  try {
    spec = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    fail(`Job ${id} is not valid JSON: ${err.message}`);
  }
  for (const field of ["id", "title", "maxSeconds", "cpu", "memoryMiB", "run"]) {
    if (spec[field] == null) fail(`Job ${id} is missing required field "${field}".`);
  }
  if (!(spec.maxSeconds > 0)) {
    fail(
      `Job ${id} has no usable maxSeconds.`,
      "Every job carries a ceiling. Without one a stuck sandbox bills until the credit is gone.",
    );
  }
  if (spec.maxSeconds > FOUNDER_APPROVAL_SECONDS) {
    fail(
      `Job ${id} asks for ${spec.maxSeconds}s, above the ${FOUNDER_APPROVAL_SECONDS}s agent ceiling.`,
      "A job this size needs Garrett. Post it to the bus instead of raising the limit.",
    );
  }
  if (spec.dataClass && spec.dataClass !== "public-only") {
    fail(
      `Job ${id} declares dataClass "${spec.dataClass}".`,
      "Only public-only jobs run here. Nothing in a sandbox touches production data.",
    );
  }
  return spec;
}

const worstCaseUsd = (s) =>
  s.maxSeconds * (s.cpu * USD_PER_VCPU_SECOND + (s.memoryMiB / 1024) * USD_PER_GIB_SECOND);

function printPlan(spec, live) {
  const cost = worstCaseUsd(spec);
  const L = [];
  L.push("");
  L.push(`  JOB      ${spec.id}  -  ${spec.title}`);
  L.push(`  MODE     ${live ? "LIVE (will spend)" : "DRY RUN (spends nothing)"}`);
  L.push(`  SHAPE    ${spec.cpu} vCPU, ${spec.memoryMiB} MiB, template ${spec.template ?? "base"}`);
  L.push(`  CEILING  ${spec.maxSeconds}s`);
  L.push(`  COST     $${cost.toFixed(4)} worst case, $${(spec.estimatedCostUsd ?? 0).toFixed(4)} estimated`);
  if (spec.why) L.push(`  WHY      ${spec.why}`);
  L.push("");
  L.push("  SETUP");
  for (const c of spec.setup ?? []) L.push(`    $ ${c}`);
  L.push("  RUN");
  for (const c of spec.run) L.push(`    $ ${c}`);
  if (spec.collect?.length) {
    L.push("  COLLECT");
    for (const c of spec.collect) L.push(`    ${c}`);
  }
  if (spec.acceptance?.length) {
    L.push("  ACCEPTANCE");
    for (const a of spec.acceptance) L.push(`    - ${a}`);
  }
  if (spec.notes) {
    L.push("");
    L.push(`  NOTE     ${spec.notes}`);
  }
  L.push("");
  process.stdout.write(L.join("\n") + "\n");
}

function requireCli() {
  const probe = spawnSync("novita", ["--version"], { encoding: "utf8" });
  if (probe.error || probe.status !== 0) {
    fail(
      "The `novita` CLI is not on PATH.",
      "Install is Garrett's call, not an agent's: `npm i -g novita-sandbox-cli`.\n" +
        "Until then use --dry-run, which needs nothing.",
    );
  }
}

function runLive(spec) {
  requireCli();
  if (!process.env.NOVITA_API_KEY) {
    fail(
      "NOVITA_API_KEY is not set.",
      "Garrett sets it in the environment by hand. Never paste a key into a chat or a file.",
    );
  }

  const sh = (args, opts = {}) =>
    execFileSync("novita", args, { encoding: "utf8", timeout: (spec.maxSeconds + 60) * 1000, ...opts }).trim();

  let id = null;
  const started = Date.now();
  try {
    // Verified command shape: `novita sandbox create <template> -d` returns the id.
    id = sh(["sandbox", "create", spec.template ?? "base", "-d"]).split(/\s+/).pop();
    process.stdout.write(`sandbox ${id}\n`);

    for (const cmd of [...(spec.setup ?? []), ...spec.run]) {
      const left = spec.maxSeconds - (Date.now() - started) / 1000;
      if (left <= 0) throw new Error(`ceiling of ${spec.maxSeconds}s reached before: ${cmd}`);
      process.stdout.write(`$ ${cmd}\n`);
      // Verified command shape: `novita sandbox exec <id> -- <command>`.
      process.stdout.write(sh(["sandbox", "exec", id, "--", "sh", "-lc", cmd]) + "\n");
    }
    process.stdout.write(`\ndone in ${Math.round((Date.now() - started) / 1000)}s\n`);
  } finally {
    // Teardown ALWAYS, including on failure. An orphaned sandbox bills per second.
    if (id) {
      const gone = spawnSync("novita", ["sandbox", "delete", id], { encoding: "utf8" });
      process.stdout.write(
        gone.status === 0
          ? `sandbox ${id} deleted\n`
          : `WARNING: could not delete sandbox ${id}. Delete it by hand NOW; it bills per second.\n`,
      );
    }
  }
}

const argv = process.argv.slice(2);
const jobId = argv.find((a) => !a.startsWith("--"));
const live = !argv.includes("--dry-run");

if (!jobId) {
  const known = existsSync(JOBS)
    ? readdirSync(JOBS).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
    : [];
  process.stdout.write(
    `usage: node lab/run.mjs <job-id> [--dry-run]\n\njobs: ${known.join(", ") || "(none)"}\n`,
  );
  process.exit(known.length ? 0 : 1);
}

const spec = loadSpec(jobId);
printPlan(spec, live);
if (live) runLive(spec);
