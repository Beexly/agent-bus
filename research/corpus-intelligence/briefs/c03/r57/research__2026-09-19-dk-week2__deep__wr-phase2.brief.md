# research/2026-09-19-dk-week2/deep/wr-phase2.md
## What it is (1-2 sentences)
A gap-hunt pass over the DK Week 2 WR lane: every Phase 1 read cross-checked against the internal corpus (9/17-9/19 CSVs) and patched with 14 new findings or reinforcements (labeled [NEW]/[REINFORCED]), ending in a revised 15-man salary-aware WR value board. One-off game-week research, not a standing model.

## Key metrics/methods (formulas where given, else "not specified")
- Corpus-driven cross-check: internal CSVs (qb-read-progression-week1, qb-aggressiveness-by-team-week1, passer-rating-allowed-week1, paganetti-middle-third-target-week1, devyeusuf-separation-score-2ndyear-wr-2026, fantasypts-similarity-finder, scottbarrett-yprr-elite-2025-26, sfdata9ers-playcalling-tendencies-week1, hawkblogger-pressure-rates, gridironinfo-qb-epa-per-play-week1) cited by filename.
- No formulas specified; metrics are reported as corpus CSV values (first-read %, TPRR, YPRR, separation score, aggressiveness %, pressure-allowed %).

## Data sources named
Internal corpus CSVs (filenames listed above); FantasyPtsData (Similarity Finder); Paganetti middle-third table; devyeusuf separation scores; Scott Barrett YPRR elite; RotoWire, DK Network (9/15), FantasyPros Fitzmaurice (9/18), Schefter (9/17), chargerswire, steelersdepot, sharpfootballanalysis, hawkblogger. External facts re-cited with source+date.

## Findings (numbers and facts, not vibes)
- Parker Washington's comps (FantasyPts Similarity Finder): Tyreek Hill MIA 2023 (sim 42.4), Puka Nacua LA 2025 (40.4), JSN SEA 2025 (37.2), Davante Adams GB 2021 (34.7), Justin Jefferson MIN 2023 (34.5) — top-12 all-time WR seasons; at $5,900 vs DEN (9th vs WR), bumped to top-8 WR play.
- Coverage liabilities from passer-rating-allowed-week1.csv: Tyrique Stevenson (CHI) +158.3 (faces MIN — Jefferson/Addison); Kamari Lassiter (HOU) +153.3 (faces CIN — Chase/Higgins); Mike Sainristil (WAS) +149.3 (faces DAL — Lamb/Pickens; WAS also 32nd vs WR in 2025, 39.9 DK PPG allowed); Denzel Ward (CLE) +147.9 (faces TB — possible one-game blip); Cooper DeJean (PHI) +143.2 playing through calf/abdomen (TEN slot WRs benefit); Derwin James (LAC) +122.4 (LV short-area); Elijah Molden (LAC S) OUT.
- QB first-read rates: Jordan Love 78.6% (1st in dataset) → Watson/Golden; Jayden Reed ($4,500, 7 tgts Wk1) is the slot beneficiary; Jacoby Brissett 77.5% → ARI targets concentrate (Michael Wilson $5,400 > MHJR at $500 more); Drew Lock 64.0% → JSN keeps volume (0.42 TPRR, 45.8% share) with an efficiency downgrade; C.J. Stroud 62.2% + 21% aggressiveness → Kayshon Boutte ($4,000) X-role concentration.
- McConkey-out cascade: LAC 84.3% motion (highest in NFL); QJ ($5,000) 22.2% Wk1 target share could spike; Tre Harris 0.77 YPRR / -0.038 sep — GPP dart only at $4,000.
- Slot-funnel middle-third rates: GB 53.8%, CHI 47.8%, ARI 45.5%, HOU 39.4%, MIN 38.9% (apply both ways); lowest DAL 10.7%, PHI 11.1%, SF 17.4% — perimeter WRs (Pickens, Evans, Deebo) win outside.
- Separation scores (2nd-year WRs): Ayomanor 0.111 (best), Burden 0.083, Egbuka 0.069; McMillan -0.108 (2nd-worst), Pat Bryant -0.053, Tre Harris -0.038, Golden 0.025. McMillan (2.03 YPRR, negative sep) is the most fragile mid-range WR; pivot Coker > McMillan (Coker outproduced him 9 straight games; 8-138-2 Wk1 at $5,100 Q).
- YPRR elite on slate: JSN 3.79, Flowers 2.87 (doubtful), Watson 2.85, Burden 2.79, London 2.52, Diggs 2.51, Lamb 2.40, Pickens 2.38, P. Washington 2.35.
- Aggressiveness: Brissett 22%, Willis 22% (highest; MIA -13.5 dogs → Tyreek Hill $4,800 best GPP ceiling-per-dollar sub-$5K); Purdy 18% + lowest first-read 27.0% → SF targets spread, Evans ($6,600, 12.7 DK proj) priciest per-target of elite tier, prefer Deebo $5,300 (11.8 proj).
- NO 22.1% no-huddle (2nd-highest on slate) + trailing script vs BAL -8.5/-9.5 → Vele $4,200 best sub-$4.5K PPR floor if Olave sits (19.9 DK pts Wk1).
- TENN/PHI 38.5/39.5 total (lowest); Ward 6% aggressiveness, Hurts 8% (3rd-lowest) + 25% scramble → fade DeVonta Smith $6,800 (11.4 DK proj) as worst elite-tier value; Ayomanor GPP-only.
- Joey Porter Jr. OUT (2nd straight week) + Carlton Davis III Q (neck, DNP all week) → softest outside coverage for cheap NE WRs (Douglas $3,800 22.6% share; Hollins $4,300, 1.02 EPA/tgt) — cash-floor plays given Maye's 6% aggressiveness.
- JAX@DEN: Lawrence led Wk1 EPA/play (+0.79); DEN allowed 56.3% pressure (worst) → prefer Sutton ($5,800) over Waddle ($6,500) on pressure + salary.
- Honest gaps: no man/zone splits in-corpus for any Sunday-main-slate WR (only MNF/Thu WRs exist in magicsportsguy CSVs); no public WR ownership (pOWN) found — RotoGrinders premium-gated, one snippet was a stale 2023 article; Mooney's 2025 splits terrible (0.66/1.14 YPRR), likely a depth-chart casualty, do not roster.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB first-read rate as a target-concentration feature (Love 78.6%, Brissett 77.5%, Stroud 62.2% + aggressiveness, Lock 64%): QB-BEHAVIOR — first-read rate concentrates targets predictably and is engine-grade; high first-read + high aggressiveness (Stroud, Brissett) is a WR1 force-feed combo.
- LAC 84.3% motion + target-vacuum cascade: SCHEME — motion rate correlates with schemed touches; leverage-tree structures (McConkey-out → QJ) are constructible from salary + role data.
- Per-route separation scores cutting against volume-ranked WRs (McMillan): OTHER — per-route winning vs role volume is a durable fragility signal for pricing.
- Coverage-liability mapping (passer-rating allowed per CB → facing WRs): SCHEME — opponent-CB passer-rating-allowed is a matchup feature with direct WR-application.
- MIA 40.5% pressure allowed (2nd-worst) vs SF rush + DEN 56.3% allowed: OL — pressure-allowed rates drive game-script and condensed passing trees.
- MIN@CHI 30-mph gusts (also in games-verify.md): OTHER — weather as an input, not a vibe.
- Aggressiveness + blowout script feeding garbage-time volume (Willis 22%, MIA -13.5): QB-BEHAVIOR — garbage-time target-funneling is quantifiable from aggressiveness × spread.

## Engine-actionable? (yes/no + one-line what)
Yes — add QB first-read rate, aggressiveness %, and opponent CB passer-rating-allowed as weekly DFS matchup features; note that man/zone WR splits remain a corpus gap needing fresh charting.
