# HERMES — completion receipt, 4 non-overlapping items (2026-11-12 17:35 CT)

Branch `claude/keen-goodall-o6kuy1`. Head `91b6eaa21`. Base `4e883a296`.

Zero Neon writes (SELECT/EXPLAIN only). Zero gate or env flips. `emissionWeight`
stays 0 and `publishable` stays false everywhere. `MODEL_VERSION` still v5.3.1.

## Files touched — nothing Opus owns

```
packages/prediction-engine/src/evidence/corpus-adapter.ts          NEW
packages/prediction-engine/src/evidence/family-diagnostics.ts      M
packages/prediction-engine/src/evidence/types.ts                   M  (CorpusGroundingRecord.family)
packages/prediction-engine/src/__tests__/evidence/corpus-adapter.test.ts  NEW
packages/prediction-engine/src/__tests__/evidence/fixtures.ts      M
packages/ingestion-pipeline/src/evidence-loaders/corpus.ts         M  (populate family)
packages/ingestion-pipeline/src/evidence-loaders/market.ts         M  (outlier filter)
packages/ingestion-pipeline/src/evidence-loaders/market.test.ts    M
packages/ingestion-pipeline/src/refresh-odds.ts                    M  (free fallback)
packages/ingestion-pipeline/src/__tests__/refresh-odds.test.ts     M
scripts/ops/run_pregame.ts                                         M  (Stage D + Stage F)
scripts/ops/week10_shadow_slate.sh                                 NEW
docs/engine/research/2026-11-12/odds-cadence-rca.md                NEW
data/engine/jev/week10-2026-11-12/*.json                           14 NEW
data/engine/shadow/week10-2026-11-12/*.json                        14 NEW
```

Not touched: `premisesAndEquations`, `nflFarmPriors`, `next_gen_stats`,
`free-score-persist.ts`, `settle-picks/route.ts`, `apps/web/app/calibration/**`,
`verify_public_ledger.ts`.

## 1. Corpus shrink in Stage D

`applyCorpusGroundingToFamilyDeltas` takes a `GameGrounding`; the bundle carries
flattened `CorpusGroundingRecord[]`. `toGameGrounding` rebuilds the shape,
`applyCorpusShrink` maps the result back onto the measured deviations.

`CorpusGroundingRecord` gained a `family` field — without it the mapping is
impossible, because the record only carried the facet query string.

Only two pairs are mapped by default: `rest -> restFatigue`, `weather ->
weather`. The other six families have no facet in the current library and are
left untouched, because absence of a facet is not evidence against a mechanism.
Adding a pair is a claim that two things measure the same mechanism, and it
should be argued for.

The shrink can only reduce a deviation, never grow or flip it. The posterior
stays equal to the market prior. 12 tests.

## 2. Stage F two-sided

```
homeEdge = posterior - impliedHome
awayEdge = (1 - posterior) - impliedAway
```

Both reported in `outputs.pricing`, with `bestSide` and `bestEdge`. Checking
only the home side reported a no-bet on games where the away side was the value.

## 3. Odds cadence — RCA and fix

`docs/engine/research/2026-11-12/odds-cadence-rca.md`.

The schedule was never wrong. `vercel.json` declares every fifteenth minute and
the route has no throttle. `PAID_CALL_MIN_INTERVAL_MS = 60 * 60 * 1000` caps the
PAID odds call at one per sport per hour, which is correct cost control.

The defect: a governor hold hit `continue`, which skipped `processSport()`
entirely — and therefore skipped the FREE ESPN/Rundown path too. The hourly cap
on the paid request had silently become an hourly cap on all odds ingestion.

A held sport now runs on the free path. `recordPaidRunAccounting` is skipped
because no paid request was made. The 30-minute freshness rule is untouched.

Four tests asserted the old behaviour and were updated to assert the new
contract. 41 tests pass.

**Not live.** Needs a Production deployment. Until then the feed keeps moving
hourly.

## 4. Week 10 slate

14 JEV spines and 14 sealed shadow runs in `data/engine/shadow/week10-2026-11-12/`.

```
game       verdict        posterior  bestEdge  side
buf-nyj    SHADOW         0.2275     0.0226    HOME
car-no     NO_BET         0.5500     0.0056    AWAY
hou-cle    NO_BET         0.3393     0.0049    HOME
jax-ten    SHADOW         0.3799     0.0456    AWAY
kc-atl     NO_BET         0.3637     0.0108    AWAY
lac-bal    SHADOW         0.6435     0.0221    AWAY
lar-ari    NO_BET         0.1934     0.0015    AWAY
mia-ind    SHADOW         0.6934     0.0382    HOME
min-gb     SHADOW         0.6302     0.0365    AWAY
ne-det     SHADOW         0.5339     0.0339    HOME
pit-cin    NO_BET         0.6341     0.0088    AWAY
sea-lv     NO_BET         0.2694     0.0053    AWAY
sf-dal     NO_BET         0.4359     —         —
wsh-nyg    NO_BET         0.5486    -0.0070    HOME
```

6 SHADOW, 8 NO_BET, 0 published. WSH @ NYG re-sealed on fresh odds at 23:02Z.

## Two data defects found while running the slate

**Best-price outliers.** JAX @ TEN had a +440 home quote against a +150
consensus — a 290-cent outlier that manufactured a 19.5-point edge. The loader
now keeps only quotes within 0.05 of the de-vigged consensus and reports how
many it excluded. That game's edge fell to 0.0456 on the away side, which is the
real value. NE @ DET fell from 0.0512 to 0.0339.

**SF @ DAL has corrupt H2H rows.** `draftkings` and `williamhill_us` each carry
886 rows across 886 ingestion runs with spread-like prices (-120/-102,
-131/+100) written into the moneyline market. The consensus is dragged to 0.4359
and every quote is then excluded as an outlier, so the game reports MISSING
moneylines rather than a fabricated price. That is the correct behaviour. The
ingestion defect is upstream in the normalizer and is not fixed here — flagging
it rather than patching it at 17:30.

## Tests

```
prediction-engine evidence        64 passed (7 files)
ingestion-pipeline loaders+gate  134 passed (10 files)
ingestion-pipeline process-sport  87 passed
```

## For Opus

The branch is clean on top of `4e883a296`. Nothing in your five lanes was
touched. `CorpusGroundingRecord` gained a required `family` field — if your
`premisesAndEquations` work constructs that record, it needs the field.

— Hermes
