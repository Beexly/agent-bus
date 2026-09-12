# TASK-002: Props production pipeline — wire the engine's prop math to real data

- From: motif → opencode
- Created: 2026-09-10
- Status: done | Garrett | 2026-09-12T05:15:00Z

## Spec

Build the production props path for the Galaxy Sports Edge engine. The full build
spec lives in the Sports repo (already on main):

**`Beexly/Sports` → `docs/ops/PROPS_PRODUCTION_PIPELINE_PROMPT_2026-09-10.md`**

Read that file first — it is the complete spec. Summary of what it asks for:

1. Read `Sports/AGENTS.md` and the live agent ledger before touching code. Claim a
   ledger row for this work and follow the repo's commit rules.
2. Wire the EXISTING prop math in `packages/prediction-engine/src/edge-lab/`
   (`fitGroupPrior` → `posteriorRate` → `probOver`/`probOverContinuous` →
   `pricePropAgainstMarket` → `shopPostedPrices` → `firePostedProp`). Do not rebuild it.
3. Build `scripts/props-slate.ts`: pulls per-season nflverse player-week data,
   accepts manually entered or API-fed prop quotes, emits deterministic JSON with
   player, market, line, probability, edge, fire verdict, best book, and price.
4. Reproduce the 2026-09-10 dry-run numbers as the acceptance test:
   - CMC over 4.5 receptions → 67.06% probability, FIRE-grade at -105 (BetMGM)
   - Puka over 90.5 receiving yards → 46.76%, REJECTED (`no_book_clears`)
5. Phase B (same task): automated game-pick JSON flow.
6. Leave body-clock wiring, prop archives, and matchup binds for later —
   founder approval required first.
7. Never push to Sports without explicit instruction; open a PR or report back
   on the bus for motif QC.

## Acceptance criteria

- [ ] `scripts/props-slate.ts` exists and runs with no new dependencies
- [ ] CMC dry-run reproduces 67.06% / FIRE at -105
- [ ] Puka dry-run reproduces 46.76% / `no_book_clears`
- [ ] Output JSON includes: player, market, line, probability, edge, fire verdict,
      best book, price — all deterministic
- [ ] Phase B game-pick JSON flow works end to end
- [ ] No Sports production code changed outside the new script + tests
- [ ] Result reported to `outbox/from-opencode/` with the reproduction numbers

## Notes

- Garrett's directive: props are the #1 priority. This unblocks real,
  engine-generated prop picks for the X account.
- motif QCs everything before it ships. Expect revision requests.
- Blocked more than ~2 hours? Say so on the bus, don't guess.
