# docs/SURFACE_AUDIT.md
## What it is (1-2 sentences)
A mandatory Day-0 gate audit (generated 2026-06-23T21:46:09Z) verifying branch reality, every referenced file/flag, and read-only nflverse data access in the `codex/intelligence-core` worktree before any feature code was written for the GSE Intelligence Core package.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified — this is a verification audit, not a methods doc. Its key methodological constraint: **market anchoring must conserve physical football units (`passYds`, `rushYds`, `teamTD`) and derive fantasy points afterward** — a fantasy-points-sum-to-scoreboard invariant is explicitly forbidden ("Do not implement a fantasy-points-sum-to-scoreboard invariant").
## Data sources named
- nflverse GitHub releases, probed with byte-range reads only (no full file downloaded):
  - Regular-season play-by-play (1999+ backtest substrate): `https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_1999.csv` — HTTP 206, `bytes 0-2047/65543024`, 2048 bytes read, confirmed reachable.
  - ESPN QBR weekly (2006+, advanced metric family): `https://github.com/nflverse/nflverse-data/releases/download/espn_data/qbr_week_level.csv` — HTTP 206, `bytes 0-2047/2443597`, 2048 bytes read, confirmed reachable.
  - Weekly player stats (player-week fantasy/usage substrate): `https://github.com/nflverse/nflverse-data/releases/download/player_stats/player_stats.csv.gz` — HTTP 206, `bytes 0-2047/7211865`, 2048 bytes read, confirmed reachable.
- Environment caveat: plain Node `fetch` failed TLS locally (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`); `node --use-system-ca` succeeded — future nflverse scripts on that host must run with system CAs or the app runtime path.
## Findings (numbers and facts, not vibes)
- **Conclusion: GO for A1 after the Slice 0 commit**, in shadow mode only.
- Branch reality: work branch `codex/intelligence-core` cut from `origin/claude/sweet-fermi-sk9gws` at commit `62ffca63ca58d4540fc9e0fbdfb70a44aa17e70c`; dirty primary worktree at `C:\Users\Garrett\Sports` untouched.
- File sizes discovered via byte-range probes: play_by_play_1999.csv = **65,543,024 bytes**; qbr_week_level.csv = **2,443,597 bytes**; player_stats.csv.gz = **7,211,865 bytes**.
- Twelve package docs (kickoff, execution brief, INTEL_00–05, advisory, atlas, master) exist externally at `C:\Users\Garrett\Documents\Claude\Projects\AI Sports` but are absent from the repo branch — treated as external operating briefs; precedence order: `GSE_INTEL_00_RIGOR_PASS.md` authoritative, corrected execution briefs override design docs.
- Scaffolding surface: `LadderEvent`, `reduceLadder()`, `RUNG_REQUIREMENTS`, `GameSettledEvent`, replay harness (`packages/prediction-engine/src/replay-harness.ts`) all absent → build new; separate **fantasy and betting proof tracks** required in `RUNG_REQUIREMENTS`.
- Hard gates inventory (Codex must not flip): `PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `CALIBRATION_ADJUSTMENTS_ENABLED`, `PROJECTIONS_PROVIDER`, `canPublishProjections` (hard `false` in multiple surfaces), `MODEL_VERSION`; guardrail scripts `trust-gate.mjs`, `model-freeze.mjs`, `draft-only.mjs`; Stripe price IDs (`STRIPE_FANTASY_MONTHLY_PRICE_ID`, `STRIPE_FANTASY_ANNUAL_PRICE_ID`) are owner/infra-gated.
- Existing `apps/web/lib/projections/weekly-model.ts` weekly fantasy model is a **gated v1 reference only** — not the corrected market-anchor math until B3 is rebuilt with yards/TD conservation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- nflverse PBP since 1999 as backtest substrate → OTHER (historical evidence base)
- QBR 2006+ as advanced metric family → QB-BEHAVIOR (QBR is a QB performance metric family, engine-relevant for QB evaluation)
- Physical-units conservation anchor rule → SCHEME (modeling invariant for projection anchoring)
- Trust-gate / model-freeze / draft-only guardrail scripts → TRUST-SIGNAL
- Separate fantasy vs betting proof tracks → TRUST-SIGNAL
- Failing-first invariant test before production code → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
**Yes** — canonical nflverse URLs + byte-range probe pattern (65.5MB PBP, 2.4MB QBR, 7.2MB player stats) document the engine's read-only backtest substrate, and the physical-units conservation invariant is a hard modeling rule for any market-anchored projection rebuild.
