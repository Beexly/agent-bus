# ops/edge/2026-08-19-edge-roadmap.md
## What it is (1-2 sentences)
Machine-consumable synthesis (2026-08-19) of four prior reports (pipeline archaeology, dormant assets, literature, competitive field) laying out a preregistered experimental program to move GSE from RES ≈ 0 (calibrated but uninformative) to a certified, published edge. It diagnoses the current `Pick.confidence` as a market-structure echo with no outcome model in it, ranks 8 experiments, defines anytime-valid e-process proof standards, and a 4-rung public proof ladder.

## Key metrics/methods (formulas where given, else "not specified")
- **Diagnosis:** SPREAD/TOTAL confidence = sum of consensus/depth/vig/volatility/context components (scoring.ts:486-494); ML likewise (scoring.ts:844-851); independent-edge assessment deliberately excluded from confidence (scoring.ts:833-835). SPREAD/TOTAL pick = "bet the market's own favorite at the market's own line" (`rankingSource: "confidence"` hardcoded, scoring.ts:551-552). Documented separation of confidence ≈ −0.005.
- **Certification standard:** CLV beat-rate ≥ 52.4% (the −110 break-even, 110/210 = 52.38%); matches existing `minBeatCloseRate: 0.524` (pricing-phases.ts:110).
- **E-process machinery:** E_t = p_t/m_t on success, (1−p_t)/(1−m_t) on failure; product is a supermartingale under H0; Ville's inequality → sup_t M_t anytime-valid; running max is the test (forecast-skill-eprocess.ts:25-64).
- **Certification track:** H0: P(beat) ≤ 0.524 (m_t ≡ 0.524); alternative = preregistered equal-weight mixture over θ ∈ {0.56, 0.60, 0.65}; PROMOTE when running-max E ≥ 20 (α = 0.05 anytime-valid). Detection track: same with m_t ≡ 0.50 (faster-growing, research signal only).
- **Kill rules:** KILL-A: E⁻ ≥ 10 at any time (H0′: P(beat) ≥ 0.524, alt θ = 0.48). KILL-B (budget): at N_max flagged picks, running-max detection E < 3 → shelve. Calendar checkpoint at 6 weeks.
- **Power table** (expected n to reach E ≥ 20; n = ln 20 / KL(Bern(θ)‖Bern(θ₀))): θ=55% → ~600/~2,200; 58% → ~230/~475; 60% → ~150/~260; 65% → ~65/~90; 70% → ~35/~50 (detection vs certification). Implication: only flagged-subset beat-rates ≥ 58–60% can certify within a season at lifetime volume of 1,161 settled picks.
- **Ranked experiments (Score = expected CLV impact × confidence / cost):**
  - X1 Cross-book consensus-outlier ranking (Kaunitz replication); τ = 0.03 devigged-prob (ML); N_max=400; Impact 3.0, Conf 0.60, Cost 1.5, Score 1.20, QUICK. Evidence: +3.5% ROI over 10 years of closing odds, +6.2–8.5% real money before account limiting (Kaunitz et al. 2017).
  - X3 Sharp-anchor divergence vs devigged Pinnacle (Buchdahl replication); flag divergence ≥ 0.02 prob; N_max=400; Score 0.78, MEDIUM. Evidence: live published record since Aug 2015.
  - X4 Kalshi divergence at lock; flag |div| ≥ 0.03 with liquidity floor; N_max=300; Score 0.33, MEDIUM. Co-primary tests: CLV beat-rate + resolution-direction e-process (null 0.5).
  - X2 Line-movement/velocity predicting close; flag top-decile predicted CLV; N_max=500; Score 0.30, QUICK. Ablation kill: predicted-vs-realized CLV rank-correlation < 0.05 at N_max.
  - X8 Under-attended derivatives (season win totals); N ≈ 30–90 picks/season; Score 0.28, DEEP.
  - X5 Promote prospective independent trueProb to published p (conditional on E1 pilot); ablation α/anchor sweep of 0.88 shrink and 0.55/0.45 market re-anchor; current setting forfeits ~77% of independent variance (deviation multiplier 0.55×0.88 = 0.484, variance ×0.234); Score 0.17, MEDIUM.
  - X6 NFL informational latency (injuries/depth/participation, regular season); N_max = one season of flags; Score 0.13, DEEP.
  - X7 Decorrelated totals/ATS second-opinion models (Poisson-λ totals, EPA-margin ATS); flag |modelFair − marketFair| ≥ 0.04; N_max=300; Score 0.07, DEEP.
- **Program rules:** unit = one flagged pick; outcome X_t = 1{clvVerdict = "BEAT_CLOSE"}; MATCHED_CLOSE excluded, reported as diagnostic (high match rate = 15-min snapshot granularity artifact). Retrospective evaluation labeled PILOT only, never fed to e-process. Multiplicity: platform-level claim via product/average across preregistered families or e-BH.
- **Enablers:** E1 clean-room baseline on prospective ML independentEdge.trueProb only (exclude `rationale LIKE 'Retrospective%'`, exclude SPREAD/TOTAL, evaluate raw trueProb not the 0.484-attenuated/45%-anchored blend); E2 line archive ON + Pinnacle EU leg (≈120 credits/month/sport at T-24h/T-6h/T-60m/T-5m cadence; Pinnacle leg costs exactly 1 extra Odds API credit per sport per refresh; free tier 500/month); E3 quarantine retro-backfill (4-hourly cron `10 */4 * * *`); E4 preregistry + per-pick hash pre-commitment (SHA-256; Pedersen commitments available).
- **STOP list:** (1) treating `Pick.confidence` as a model; (2) using retrospective backfill as evidence — look-ahead via current-season standings/FPI/EPA rebuilt at backfill time, team-WIN probs written onto SPREAD picks (backfill-independent-trueprob.ts:198,250-253); (3) in-sample suppression selection (selectivePublishSweep argmaxes Murphy resolution on same rows). Do-not-revive: public Elo/FPI vs spread (~51% ATS), accuracy-tuned box-score models, static published biases, post-news in-play chasing.
- **Proof ladder Rungs 0–3:** R0 FOUNDING = live reliability curve + Brier decomposition (holdout ECE 0.0044, BSS +0.93%) + hash pre-commitments + prereg registry; R1 PROVEN = per-pick CLV ledger (≥100 settled); R2 ESTABLISHED = e-process edge certificate, E ≥ 20 (≥500 settled + verified CLV ≥ 52.4%); R3 AUTHORITY = multi-season certificates + model graveyard (published killed experiments).

## Data sources named
The Odds API (free tier 500/month, no historical odds), TheRundown, ESPN, Kalshi public GET (no key, near-zero overround; taker fee peak ~1.75% at p=0.5), MLB StatsAPI, nflverse (CC-BY-4.0, $0), Pinnacle via Odds API EU leg, Polymarket (behind compliance hold `INDEPENDENT_POLYMARKET=1`, default OFF). Internal: per-book Odds history (15-min refresh), Odds time series, ShadowSignal ledger, Pikkit/BetStamp for third-party timestamps.

## Findings (numbers and facts, not vibes)
- Lifetime settled census = 1,161 picks; flat suppression sweep and BSS +0.93% are the expected output of the current confidence design, not a mystery.
- Current ML `independentEdge.trueProb` attenuated ×0.484 and re-anchored 45% to market price before the only metric that sees it.
- Program thesis from literature: the only cheap persistent resolution source is disagreement between market prices — cross-book outliers, sharp-anchor divergence, prediction-market divergence, under-attended venues (NFL preseason limits ~$2k, ~80% professional handle).
- Kaunitz et al. 2017: +3.5% ROI over 10 years of closing odds, +6.2–8.5% real money before account limiting (irrelevant for a picks-seller).
- Team-strength modeling tuned for accuracy collapses onto the book's own model → zero residual resolution (Hubáček et al., IJF 2019).
- Power table: at ≥58–60% flagged-subset beat-rate, certification needs n ≈ 260–475 — certifiable within one season at GSE volume; one to two certifiable families per season is the expectation.
- Total wiring budget: enablers ~3–4.5 agent-days; QUICK ~4; MEDIUM ~9; DEEP ~15 — zero data spend beyond existing free tiers.
- Public Elo/FPI vs spread ≈ 51% ATS (not an edge); nfelo +0.14% vs close.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cross-book divergence / sharp-anchor signals as the documented cheap persistent edge source (OTHER — engine resolution strategy).
- Anytime-valid e-process proof standard as the honesty machinery for "watch us earn PROVEN in public" — negative-results graveyard as a differentiation moat (TRUST-SIGNAL — public credibility through verifiable self-audit).
- Model graveyard + per-pick public CLV ledger as competitive honesty ceiling above RAS aggregate CLV beat-rate (TRUST-SIGNAL — trust is the product differentiator vs competitors).
- NFL preseason as under-attended venue with ~$2k limits, ~80% pro handle, books disagreeing by a full point (SCHEME — market inefficiency tied to venue attention; also COACHING-adjacent via playing-time news moves of 5 points).

## Engine-actionable? (yes/no + one-line what)
Yes — ranked experiment list X1–X8 with prereg values (τ=0.03, divergence ≥0.02, |div|≥0.03), e-process gating machinery (E ≥ 20 / KILL at E⁻ ≥ 10), and wiring budget estimates map directly onto engine work queue priorities.
