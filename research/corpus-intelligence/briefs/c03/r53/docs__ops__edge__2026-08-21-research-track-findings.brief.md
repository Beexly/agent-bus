# docs/ops/edge/2026-08-21-research-track-findings.md
## What it is (1-2 sentences)
Decision memo from the 2026-08-21 Research track 11-agent fan-out: the frozen MLB-totals MVE model had three independently confirmed math errors (Anscombe inverse offset, NB2 dispersion, shrinkage constant), the most serious being a ~0.5-run underestimation that shifts P(Over) ~5.3pp at an 8.5 line — larger than the ~4.5% vig — so the model must not be fired until corrected. Also records lane findings on data rights (Odds API historical covers 2022–2026), pricing headroom, growth moves, and two dead CI monitors.
## Key metrics/methods (formulas where given, else "not specified")
- Anscombe forward: `sqrt(x+3/8)` confirmed correct (Var≈0.249 @ Poisson 4.5).
- Inverse offset: WRONG `θ² − 3/8`; correct `θ² − 1/8` (Mäkitalo–Foi 2011). Underestimates each team's run rate by ~¼ run, ~0.5 run on the total; moves P(Over) ~5.3pp at 8.5 line vs ~4.5% vig.
- Back-transform structure: invert per team then sum `(θ_h²−1/8)+(θ_a²−1/8)`; average-then-square adds convexity gap `¼(θ_h−θ_a)²`.
- NB2 dispersion φ: current 12 encodes VMR 1.375 vs empirical MLB team-runs VMR ~2.15–2.22 (Var ≈ 9.5–10 at μ≈4.5); MoM refit φ ≈ 3.7 (12 is ~3.3× too high); upper-tail probabilities understated 26–38%.
- Shrinkage: D_i must be `1/(4 n_i)` (ledger C-64), not `s²/n_i` (C-65); s²=0.04 is 6.25× below the Anscombe Poisson floor 0.25 — pooled variance cannot be below it. MIN_GAMES_FOR_EMPIRICAL: 8 → 50–100+ (8 obs → ~53% rel. SE); pre-threshold fallback = 0.25.
- Jensen/Var(Θ) back-transform bias: exactly Var(Θ), ~0.0005–0.0034 run → ~0.04pp — negligible, fold in for free only if touching the back-transform.
- A_hat (MoM): formula OK; under correct s²=0.25 and n=4–20, honest A_hat = 0 (full shrinkage).
- Locked fixture re-anchor: under 1/(4n_i), sum D=0.169 > spread 0.0875 → A_hat=0, all θ=2.175; pick a spread exceeding sampling noise.
- CLV pipeline: de-vig (multiplicative baseline + Shin option, cite Shin 1993 EJ 103:1141) → CLV vs Pinnacle no-vig close; ESTABLISHED milestone ≥52.4% CLV proof.
## Data sources named
The Odds API paid historical endpoint (2022–2026 core h2h/spreads/totals, all five sports; data from 2020-06-06, 5-min snapshots from Sep-2022; 10 credits/region/market → ~5M/$119-mo tier for backfill; snapshot-only, no "closing" field — reconstruct close = nearest-before-commence_time ±5 min); openfootball (EPL fixtures+scores, no odds — drop martj42 for EPL, national-team only); MLB Stats API; Open-Meteo; Bickel & Kim (2014).
## Findings (numbers and facts, not vibes)
- The prereg flagged the Jensen term (~0.04pp, negligible) and missed the dominant offset error entirely — headline fix is 3/8→1/8 plus per-team invert-then-sum.
- Efron–Morris shrinkage is the transferable moat across 5 sports; tail models do NOT generalize: shared shrinkage engine + 4 tail plugins — NB2 for MLB/NHL (recalibrate φ, handle empty-net/shootout), Dixon–Coles for soccer (existing module; don't route O/U through NB2), Gaussian for NBA, compound/drive model for NFL (multimodal on 3s and 7s).
- `efron-morris-js.ts` is an orphan commit not on HEAD/working tree of the prereg branch — the "verified, wired-in" module was unwired.
- The "locked fixture at maxdiff 0" cited as validation only proves formula wiring, not the constant (circular).
- Lane C: `external-watchdog.yml:63` fails unless scheduler status == "ok" but code only ever emits "healthy" → alarm permanently red, operators mute it; fix to `!= "healthy"`. `external-cron.yml:130` gates refresh-odds on a nonexistent `*/30` cron — odds refresh can never fire on schedule. `ci.yml:118` `build: needs: test` → red test makes Build skip (not fail), which branch protection treats as non-blocking → broken build can merge.
- Growth sequencing: wire free 2-pick teaser to live NFL Week 1 + EPL slate with single "Unlock confidence + full board — $14.99" CTA on blurred confidence cell; programmatic SEO ~26 fixture previews/wk; daily NFL+EPL generation+grading NOW → ~100 settled picks in 4–6 weeks, publish calibration at count≥100; PROVEN blocker is settled-pick accrual, not code.
- Pricing: Action Network PRO $29.99 / LABS $249; OddsJam ~$39→$500; GSE Elite $24.99 sits below competitors' entry tiers — headroom.
- Open loops: exposed Neon prod connection string must be rotated (founder action); Upstash Redis (500k cmds/mo) and Neon Postgres (0.5GB/branch) replace paid line items for dev/staging; do NOT use Vercel Hobby for GSE (non-commercial clause = licensing risk); Resend (3k/mo) over SES.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Anscombe inverse-offset bug producing a fadeable UNDER lean larger than vig [TRUST-SIGNAL]
- φ≈3.7 refit from settled data; upper tails understated 26–38% where totals bets live [TRUST-SIGNAL]
- D_i = 1/(4n_i) shrinkage discipline and C-64-over-C-65 governance call [OTHER]
- Sport-specific tail plugins (NFL compound/drive model, multimodal on 3s/7s) [SCHEME]
- Public CLV ledger + ≥52.4% CLV ESTABLISHED milestone [TRUST-SIGNAL]
- Two dead monitors + CI skip-gate (reliability fixes) [OTHER]
## Engine-actionable? (yes/no + one-line what)
YES — correct the inverse offset (3/8→1/8), refit φ≈3.7 from settled data, adopt D_i=1/(4n_i) with MIN_GAMES 50–100+, and use sport-specific tail models (NFL compound/drive) before any MVE fires.
