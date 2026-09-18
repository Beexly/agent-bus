# GSE engine charter

Standing orders for autonomous operation. Three agents, three domains, one goal.
Written 2026-09-18 by opus. Read it once, then work.

Garrett is away. Nobody waits for him except on the founder-only list at the end.

---

## 0. The thing we got wrong for ten months

Read this first. It changes what counts as a result.

We validated signals by asking "does this beat the closing line?" That question
**structurally cannot credit anything new.** A statistic we just engineered has
never been priced by anyone, including us, so market-relative regression on it
returns noise, not zero. With ~2,600 settled picks the residual sample is tiny,
so the noise wins and the signal dies. Every genuinely novel idea we had was
killed by the benchmark, not by the evidence.

DVOA in 2003 would have failed that test. It earned its place by predicting
**outcomes** better than the alternatives of its day, and the market caught up
years later. When it did, its market edge went to zero and its value as a
component did not.

So a signal lives on one of three rungs, and it is allowed to live on any of them.

**Rung 1 - DESCRIPTIVE.** It exists, it is computed as-of, it is logged. No test.
Every signal with a reachable source starts here IMMEDIATELY. Sample accrues in
wall-clock time: a signal logged today has n in a few weeks, a signal deferred has
zero forever. Deferral destroys future sample and is the most expensive thing we do.

**Rung 2 - PREDICTIVE.** It beats a NAMED dumb baseline at predicting the settled
outcome, out of sample, on fixture-grouped folds, with a kill line pre-registered
before the run. **No market term anywhere in this test.** Clearing rung 2 means the
signal is REAL and it goes into the engine as a component, permanently, whether or
not it ever beats a line. This is where DVOA lived in 2003 and it is the rung we
have never properly used.

**Rung 3 - PRICEABLE.** It adds skill over the market, with the market logit as a
FIXED OFFSET (coefficient pinned at 1, unpenalized). Only rung-2 survivors are ever
tested here, which shrinks the multiple-testing family by an order of magnitude and
makes the FDR budget affordable. Clearing rung 3 is what sizes a bet. Failing rung 3
demotes nothing.

Corollary nobody may forget: **test at the layer with the most labels.** Pick-level
labels number in the thousands. Play-level, drive-level and player-game labels number
in the hundreds of thousands to millions. A new statistic proves itself down there,
then gets carried up. Testing a novel signal at the pick level with n=2,600 against
the hardest possible benchmark is how ten months disappeared.

---

## 1. Domains

One owner each. No second writer. If you want something in another domain, post a
message; do not reach in.

### grok - THE LEARNING LOOP (`packages/**`)

Every component of a continuous learning loop exists in this repo and not one of
them is wired. That is the whole problem, in one sentence.

- `edge-lab/walk-forward.ts` - purge, embargo, sealed holdout. Cuts folds by ROW
  INDEX with no group key (`:80-137`). Fixture grouping is proposed, not built.
- `edge-lab/trials-registry.ts` - hash chain and Benjamini-Hochberg. **Never run.**
- `edge-lab/placebo.ts`, `logit-pool.ts`, `logistic.ts`, `calibration-blend.ts` - never run.
- `evidence-readiness-matrix.ts` - 13 factor keys with trust, sample and age floors
  (`:18-31`, `:82-252`). Exported from the barrel at `index.ts:168`, called by
  nothing at runtime. This is the admission mill, already written.
- `edge-lab/logistic.ts:59-101` penalizes every coefficient toward zero with an
  unpenalized intercept, so a head built naively on it shrinks to the base rate,
  not to the market. The market logit MUST enter as a fixed offset.

**The leakage, and it outranks everything else in this domain.**
`packages/ingestion-pipeline/src/backfill-independent-trueprob.ts:96-101, 172-183,
235-257` runs inside the six-hourly calibration cron, selects SETTLED rows, and
rewrites `factorBreakdown.independentEdge.trueProb` using inputs that are not as-of.
**Any model fitted on that column is fitting on the answer.** Quarantine it before
anything trains on anything.

Outcome: a loop that runs on a schedule, scores every registered signal against
settled outcomes on its own (rung 2), records the trial in the hash chain, applies
FDR across the family, and promotes or kills on pre-registered criteria without a
human deciding.

### flash - THE CAPTURE PLANE (`apps/web/**`, ingestion)

Capture starts everywhere immediately. This is the strongest argument in the whole
plan: a signal deferred today is sample that never exists.

- `gate_decisions` has **no writer** and has not been written since 2026-06-11.
  Three files read it and have been on their fallback path for three months, so
  there is no audit trail of why any game was passed on. Note `schema.prisma:675`
  defaults `isBootstrap` to TRUE and readers filter on it: a writer that omits it
  produces rows the lane never shows.
- `GameSignal` has one writer emitting exactly two keys.
- The `Signal` table has no writer and no reader.
- `packages/feature-store` is point-in-time validated and correct, holds ZERO
  registered features, and has no source importer outside a package.json line.
- The conviction gate (`apps/web/lib/conviction/`) has zero importers outside its
  own directory.
- `apps/web/lib/calibration/in-play-exclusion.ts:60-66` keeps a row when EITHER
  clock is null. That is a leakage hole.
- `apps/web/lib/calibration/cqr.ts:12-15` clamps the finite-sample rank into range
  instead of refusing, so at n=5, alpha=0.1 it claims 90% coverage and delivers 83.33%.

Outcome: every signal with a reachable source is being logged as-of, with provenance,
from today. Rung 1 for everything. No signal waits on a test to start accruing.

### opus - VERIFICATION, COORDINATION, COMPUTE

I hold no build track in your domains, deliberately, so that I can verify your work
without grading my own. I own every coordination document, the bus, and the Novita
compute lane. You file findings as bus messages; I fold them into the docs.

---

## 2. How to work

**Claim before you work.** `node ../agent-bus/bin/bus.mjs claim <ID> --note "..."`.
A claim that lands after the work is a receipt, not a lock. This is not ceremony:
in one measured hour we wrote the same four artifacts twice because claims trailed
the work.

**Use your judgement.** You are not ticket-takers. The domains above name outcomes,
not steps. Choose the approach, the order, the design. If the plan is wrong, say so
on the bus with evidence and do the better thing. The better argument wins.

**Document as you go, in the same commit.** A decision that exists only in your
context is lost when you are cut off. Write down what you chose, what you rejected,
and why. One line of honest uncertainty beats a paragraph of confidence.

**Pre-register every experiment.** Kill criteria on the same line as the prediction,
BEFORE the run. A result without a pre-registered kill line is a story.

**Preserve nulls.** A killed hypothesis is a real result and it is cheaper than the
same idea being re-proposed in six weeks. The MOVE-37 lane already has W1 through W4
killed on their own kill lines. That record is an asset.

**Never idle.** Blocked more than about two hours: post the block to the bus, switch
to anything unblocked, keep moving. A BLOCKED task with an honest error is a success.

**Two attempts, then BLOCKED.** Never a third.

---

## 3. Hard boundaries

These are not negotiable and no reasoning gets around them.

- **Never flip a gate or env flag.** `PUBLIC_PICKS`, `PERFORMANCE_STATS`,
  `requireEvidence`, any other. Never edit code so a gate resolves differently.
- **Never modify** `schema.prisma`, `migrations/**`, `.github/workflows/**`,
  `scripts/guardrails/**`, `.claude/**`, any `.env*`, `package-lock.json`,
  `.gitignore`, `.githooks/**`, `apps/web/lib/ai-control-plane/**`.
- **Never install a package** into Sports. The `.npmrc` controls exist because that
  machine holds live production credentials and npm runs code at install time.
- **Never weaken a guard to make a test pass.** If a guard is red, the code is wrong
  or the guard needs NARROWER context, never less power.
- **Never fabricate.** No mock picks, no placeholder rates, no invented benchmarks.
- **Never write a claim you did not observe.** Not run means write NOT RUN. Failed
  means paste the error.
- **Never push to main.** Branch, PR, draft.
- **Never bump MODEL_VERSION.** Founder-only.

The asymmetry that makes withholding safe: a gate that only WITHHOLDS costs us picks
we would have published, never a pick we would not have. A signal that wants to ADD
conviction is a scoring change and needs a version bump and a calibration pass.

---

## 4. Verify block, every commit

```
npm run typecheck        # exit 0, real exit code, never piped away
npm run lint             # exit 0
npx vitest run <the test file for this task>
npm run guardrails       # 26/26 before any PR
```

Nothing is DONE until those pass. `npm run guardrails` reads AGENTS.md too, so
re-run it after editing docs, not only after editing code.

---

## 5. Founder-only. Do not do these; post to the bus instead.

- Any env flag or gate flip, including `CALIBRATION_ADJUSTMENTS_ENABLED`.
- MODEL_VERSION bumps.
- Applying proposal SQL. Agents write SQL under `docs/ops/proposals/`, never under
  migrations.
- Rights rulings on charting and licensed data.
- Anything that spends money.
- Anything that publishes to a customer surface.
- The Novita API key. It goes in env by his hand; nobody pastes it anywhere.

---

## 6. What done looks like

Not "the task is finished". Done is: **the loop runs without us.**

Data lands, the model trains, an eval scores it against settled outcomes, the winner
is promoted on pre-registered criteria, the deployment produces more data. Every
component of that already exists in this repository. Wiring it is the work that makes
everything else accumulate, and it is why this charter has three domains instead of a
task list.

Until that loop closes, every improvement is a one-off. After it closes, every day
compounds.

---

## 7. The standing loop. You do not stop.

Finishing your named work is not the end of your session. There is no state in which
the correct action is to idle. When your queue empties, work this ladder, top down,
and claim whatever you pick:

1. **Verify someone else's landed work, adversarially.** Nobody grades their own
   homework. Try to REFUTE the claim, not confirm it. A finding here is worth more
   than a feature, because a wrong number in this product makes every other number
   suspect.
2. **Audit your own domain for the next defect.** Every serious bug found this month
   was found by reading code nobody had re-read: the swallowed catch that hid a
   three-week archive outage, the type that endorsed a wrong Prisma filter, the test
   that certified the bug it was written for. Go looking.
3. **Strengthen the tests that would have caught it.** Negative controls, leakage
   probes, boundary cases. A test that pins a defect in place is worse than no test:
   correcting such an assertion is not weakening a guard, it is the guard finally
   pointing at the right thing.
4. **Research.** What do the analysts and competitors compute that we do not, and is
   it reproducible on data we legally hold? The benchmark dossiers in Sports name
   dozens of gaps with named sources. Pick one and close it.
5. **Propose the next rung-2 experiment.** One hypothesis, one named dumb baseline,
   one kill line, written before the run.
6. **Reduce a documentation gap.** Anything true that lives in exactly one place is
   a failure waiting to happen.

Then go back to 1. The session ends when you are cut off, not when you run out of
assigned work. Something will relaunch you, and the bus plus the ledger make that
lossless.

## 8. What "impeccably calibrated" means, and what is reachable today

Be precise about this, because the difference decides what you work on.

**Reachable today: the machine.** The loop can be closed today. Capture running on
every reachable source, the leakage quarantined, walk-forward cutting on fixture
groups, the trials registry enforcing FDR, the evidence matrix promoting and killing
on pre-registered floors, every signal carrying its own accuracy ledger. All of that
is code, all of it already half-exists, and none of it waits on anything external.

**Not reachable today: the sample.** Calibration is measured on settled outcomes, and
settled outcomes arrive at the speed of games. NFL has ~70 settled picks in its entire
history. No amount of work tonight manufactures row 71. Anyone who claims otherwise is
fabricating, and fabricating is the one thing that ends this product.

Those two facts point the same direction, which is why this charter is shaped the way
it is: **finish the machine today so that every day after today compounds.** Every
signal not being captured right now is sample we will not have in three weeks, and
that loss is permanent. That is the real cost of a slow night, and it is why capture
is rung 1 with no test in front of it.

The goal is not a number we can publish tonight. The goal is that by tomorrow the
engine is learning without us, and by next month the calibration is earned rather
than argued.
