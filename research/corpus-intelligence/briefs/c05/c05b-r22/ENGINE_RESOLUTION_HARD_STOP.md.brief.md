# ops/ENGINE_RESOLUTION_HARD_STOP.md
## What it is (1-2 sentences)
Self-correction gate: after MODEL_VERSION independent ranking (v5.2.0+) and selective filters go live, if holdout selective Murphy RES stays < 0.02 on canonical non-seed WIN/LOSS, engine resolution is insufficient — maps stay locked, PROVEN never claimed; only sport-specific models/new independent features can lift it.
## Key metrics/methods (formulas where given, else "not specified")
- Trigger: holdout selective Murphy RES < 0.02 on canonical non-seed WIN/LOSS (formula not specified in file).
- Already wired independents: Poisson + Elo from real TeamGameLog; ranking priced on finite trueProb (incl. PASS) since v5.2.1; coverage v5.2.2 adds Dixon–Coles soccer, ClubElo, ESPN FPI, Kalshi series + match polarity.
- Score bake-off including independent_trueProb / blend_indep_conf; selective + pause default ON.
- Code levers: (1) sport-specific models (NFL expected metrics → independent fair value); (2) stronger market-relative features when odds warm; (3) drop dead groups permanently from public path; (4) ATS/total independents (spread/total still conf-echo ranking by design); (5) only then holdout map bake-off → GREEN×K + one-time AUTO_PUBLISH.
- Forbidden: lowering Brier/ECE/Res floors; CALIBRATION_PUBLISHED while RED; public ROI/verified/PROVEN copy while RED; deleting THE_ODDS_API_KEY / inventing dual-path free lines.
## Data sources named
TeamGameLog (real, feeds Poisson + Elo independents); Dixon–Coles soccer; ClubElo; ESPN FPI; Kalshi series + match polarity; The Odds API (kept, not deleted).
## Findings (numbers and facts, not vibes)
- Resolution floor: Murphy RES < 0.02 on holdout selective non-seed WIN/LOSS = insufficient resolution, PROVEN locked.
- Public picks + board sort by `rankingP` (not confidence alone).
- Spread/total independents are NOT independent today — they conf-echo ranking by design; fixing that is lever #4.
- Version chain: v5.2.0+ independent ranking → v5.2.1 finite trueProb incl. PASS → v5.2.2 coverage adds (Dixon–Coles, ClubElo, FPI, Kalshi).
- Floors (Brier/ECE/Res) may never be lowered to unlock PROVEN — the gate moves forward (better features), never downward.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: PROVEN/verified copy locked behind holdout Murphy RES ≥ 0.02; floors can never be lowered — this is the engine's honesty contract with Garrett.
- SCHEME: NFL expected-metrics → independent fair value is the stated #1 resolution lever — aligns with the NGS/internal metrics lane.
- OTHER: spread/total independents conf-echoing ranking is a known structural blind spot to fix before public ATS.
## Engine-actionable? (yes/no + one-line what)
Yes — holdout Murphy RES on selective non-seed WIN/LOSS is the go/no-go metric; route NFL expected-metrics fair value as independent #1 to lift it.
