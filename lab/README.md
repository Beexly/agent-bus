# lab: the compute lane

Long-running validation and reproduction jobs, run on rented compute instead of
somebody's laptop. Approved by Garrett 2026-09-18: "a compute lane for validation
runs, not infrastructure."

## Why this exists

Two kinds of work have nowhere to run today.

**Reproduction.** The nflverse metric lab produced 29 CSVs across 15 families via 4
Python scripts. They live at `~/workspace/gse-research/nfl-2026/` on Garrett's
machine and nowhere else. The repo record names the files but cannot rebuild them.
That is the anti-Grok rule broken at its worst: load-bearing data in exactly one
place, on one machine, with no way to verify it.

**Validation.** `walk-forward.ts`, `trials-registry.ts`, `placebo.ts` and
`logit-pool.ts` are written, correct, and have never run, partly because nothing
schedules them and partly because nothing has the hours. Vercel functions time out.
Agent containers are ephemeral.

## What this is not

Not infrastructure. The agent bus deliberately runs on git precisely so it needs no
host, no key and no credit. Nothing that must be reliable goes here, because the
credit expires 2026-11-17 and a lane that can expire must never be load-bearing.

## Economics, verified 2026-09-18 from Novita's own pricing page

Per-second billing. 4 vCPU is $0.0000392/s, RAM $0.0000032/GiB/s, so 4 vCPU + 2 GiB
is about $0.0000456/s. The $100 credit is therefore roughly 2.19 million seconds,
about 25 days of continuous 4-core compute. A paused sandbox bills no CPU or RAM,
only persistent storage beyond 60 GB free.

That is a lot of validation, and it is also enough rope to burn the whole credit on
one stuck process. Hence the ceiling below.

## The ceiling, which is not optional

Every job spec carries `maxSeconds` and an estimated cost. The runner refuses to
start a job without one, kills the sandbox when the ceiling is reached, and always
tears down on exit, including on failure. A job that wants more than 4 hours needs
Garrett, because at that size a mistake costs real money.

## Running a job

```
node lab/run.mjs <job-id> --dry-run     # prints the plan, spends nothing
node lab/run.mjs <job-id>               # needs the CLI and NOVITA_API_KEY
```

`--dry-run` is the default posture for anything new: it resolves the spec, prints
every command in order, and computes the worst-case cost. Prove the plan reads
correctly before spending a cent.

## Boundaries

- The key lives in `NOVITA_API_KEY` in the environment. Nobody pastes it anywhere,
  nobody commits it, no agent reads it out. Garrett sets it by hand.
- Using Novita at all requires their SDK or CLI, because there is no documented REST
  API. That is a package install, which is Garrett's call, not an agent's.
- Jobs may only read public data or artifacts already committed. Nothing in a
  sandbox ever touches production credentials or the live database.
- Results come back as committed artifacts with a manifest. A result nobody can find
  is not a result.
