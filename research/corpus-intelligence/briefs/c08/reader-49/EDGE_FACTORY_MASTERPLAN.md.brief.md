# docs/data/EDGE_FACTORY_MASTERPLAN.md
## What it is (1-2 sentences)
The platform-level planning document that reframes GSE's deliverable as "validated edges / month": an edge lifecycle (HYPOTHESIS→CANDIDATE→VALIDATED→LIVE→RETIRED), an Edge Mining Engine spec, five structural model upgrades, and a ~36-entry hypothesis catalog — all magnitudes marked priors to be verified in-house before any pricing or publishing.
## Key metrics/methods (formulas where given, else "not specified")
- Edge Mining Engine discipline: pre-registered grids + hierarchical partial pooling (player ← archetype ← position ← league, season random effects) + Benjamini–Hochberg FDR + sign stability across ≥2 seasons + minimum effective sample with design effects.
- Dirichlet-multinomial share core: `target_shares ~ DirichletMultinomial(α_1..α_k)` with `α_i = exp(β·log(est_route_share_i) + role covariates + change-point-adjusted recency + QB-conditioned effects + matchup effects)`.
- Validation gates: temporal expanding-window CV only (random K-fold banned); CRPS + PIT histograms for count/yardage props; economic referee = flat-stake CLV vs consensus close; LIVE→RETIRED at rolling 8-week contribution ≤ 0; q-contamination test (any MARKET_PROP provenance in p fails the build).
- est-routes proxy: `est_routes_i = snaps_i × team_dropbacks / team_snaps`; ATD = 1 − P(no rushTD ∧ no recTD) under the joint simulation.
- KPI target: 4–6 VALIDATED edges per month once the harness exists.
## Data sources named
nflverse (rosters/birth_date, draft, combine, PBP, schedules, snaps, QBR, officials crew data — all CC-BY); nflfastR PBP columns (temp/wind for outdoor games — coverage to verify); NOAA/NWS METAR history (US public domain, $0); our own line archive; legal reaffirmation of the poison list (no participation/FTN CC-BY-SA, no scraping, no PFF model outputs as p, no same-prop market in p).
## Findings (numbers and facts, not vibes)
- Target/carry shares are compositional (sum to 1) and belong in a Dirichlet-multinomial — independent NB per-player models can imply incoherent team totals (e.g., 55 targets); Dirichlet gives negative teammate correlation and makes injury re-projection weight renormalization.
- Prop settlement variance is dominated by volume/exposure error, not rate error: "a 15% exposure miss swamps a 2% rate miss, and exposure is where within-week information is freshest and books are slowest."
- Six structural blind spots fixed vs the Grok 10k-ft plan: compositional structure; props as quantile bets (referee = CRPS/PIT, not hit rate); time as a first-class dimension; conditional-insight mining machine; reliability-weighted shrinkage; effort allocation from measured dispersion softness map, not vibes.
- ~36 catalog entries with verifiable priors: E-A1 (QBs 32+ shift target mix toward RB/TE; RB-target-share lift prior ~20–35% relative vs <28 peers); E-A4 (RB cliff at ~age 27+/1500 career touches); E-D2 (wind ≥ ~15mph collapses deep-attempt rate); E-G5 (book self-inconsistency scanner across related lines via the joint simulation).
- P2 engineering order (volume-beats-rate principle): 0. validation harness → 1. NGS SEP on aDOT-catch → 2. est-routes/TPRR offset → 3. change-point detector + vacancy elasticity → 4. Dirichlet share core → ... 9. script core + blowout censoring.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Aging QB → checkdown migration: QBs 32+ shift target mix toward RB/TE and lower aDOT (QB-BEHAVIOR)
- Backup-QB delta matrix: target-mix/aDOT/scramble shifts pooled over backup archetypes — highest-frequency in-season re-projection edge (QB-BEHAVIOR)
- Scrambler suppression: scrambling QBs convert dropbacks to runs/sacks → team attempts down, teammate reception unders (QB-BEHAVIOR, OL)
- Sack rate as sticky QB trait; TTT follows the QB across teams while O-line reputation is the market's anchor (QB-BEHAVIOR, OL)
- New-OC scheme fingerprint: scheme priors reset to the OC's career fingerprint (PROE, pace, formation rates from prior stops), not last year's team (COACHING)
- q-firewall / provenance discipline: spread/total allowed as script covariates (MARKET_GAME), any same-prop price in p is forbidden (TRUST-SIGNAL)
- Metric reliability table: books overweight unstable stats (YPC, TD rate), underweight stable ones (target share, aDOT, TTT) (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — E-C1's est-routes/TPRR exposure offset upgrades ALL receiving volume, E-C2's change-point detector + E-C3 vacancy elasticity are the freshest structural edges in the plan, and the Dirichlet-multinomial share core is the single biggest coherence win — all priced:false, CC-BY data, zero spend.
