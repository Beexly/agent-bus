# arxiv-program/research/2026-09-21/arxiv-program/phase2/wave-reports/wave2-reader-12-search-log.md
## What it is (1-2 sentences)
Reader 12's full search log for wave 2 of the arXiv program: all 12 assigned papers were duplicates, so 12 fresh replacement candidates were searched, read in full, and ledgered as 12 ADOPT verdicts (ledgers 0882–0893) plus 6 REJECTs and 14 duplicate skips, all documented with replacement chains.

## Key metrics/methods (formulas where given, else "not specified")
- Dynamic Rank Centrality (2109.13743): dynamic BTL with Lipschitz-smooth strengths; optimal window delta* ~= T^{2/3} giving O(T^{-1/3}) l2 rate; NFL 2009–2015 (nflWAR, 32 teams × 16 rounds), LOOCV delta tuning.
- PLRank (1909.06722): ListMLE/PL-loss in gradient boosting; Yahoo 2010 NDCG@10 0.7902–0.7903 vs LambdaMART 0.7809 (~2 pts); MS30K parity; 126h vs 250+h single core vs McRank; linear ListMLE unstable unless #features large (thresholds ~200 features for NDCG@1, ~100 for NDCG@10).
- Elo for luck-driven games (2512.18858): K=-0.625, alpha~=-0.0032, beta=-0.012690, F1 0.7927 on 270k simulated games — REJECTED for internal contradictions (beta>0 required but reported negative).
- 1802.00527: margin-of-victory Elo producing full point-spread distributions (ADOPT).
- 2604.03840: decouples ranking model from prediction model; closed-form noise corrections; applied to six years of FIFA rankings (ADOPT).

## Data sources named
nflWAR (NFL 2009–2015); Yahoo 2010 learning-to-rank; Microsoft 30K; six years of FIFA rankings; 270,000 simulated Rummy games; Putnam et al. (2018) psychology survey (~2,900 participants); 53,757 Irish CAO 2000 applicants' top-10 rankings; Hattrick dataset (250 variables, 1M match samples) — 2504.09499 rejected, no ledger; 612 Bundesliga matches (2017/18–18/19) second-by-second bookmaker odds + staked volumes (2211.06052).

## Findings (numbers and facts, not vibes)
- "Gambling on Momentum" (2211.06052, econ.GN): 212 matches reaching 1-1 before 85'; equaliser outcome logit beta2 = 0.115 (0.286), n.s. — NO momentum effect on outcomes; bookmaker odds beta2 = -0.017 (0.128), n.s.; bettor stakes beta2 = 0.127*** (0.028) — +12.7pp relative stakes on the equaliser-scorer (+35.7% at covariate means, +46.5% with pre-stakes control, +19.4pp second half). Always-back-momentum ROI: -20.1% (moderate favs, 70 bets), -7.4% (moderate longshots, 50 bets), -23.3% (strong longshots, 72 bets); +0.6% for strong favs (20 bets) vs 7.9% overround.
- Dynamic Rank Centrality: 5–10× faster than kernel-MLE (n=100,T=150: 13.2s vs 66.0s; n=400,T=100: 59.6s vs 551.5s); NFL strength estimates correlate with Elo 0.284–0.518 (2011–2015) vs MLE -0.337–0.092. Code: github.com/karle-eglantine/Dynamic_Rank_Centrality.
- Parimutuel late-move paper 2509.14645 (ADOPT) directly about betting-market information aggregation.
- Integrity: two fresh candidates (2512.15269v1, 2001.04226v2) caught as duplicates at ledger-time recheck and replaced; invalid ledgers 0882–0889 quarantined to /tmp/quarantine-r12/.
- Provisional duplicate notes: 2604.08251 (5,467 pre-match influencer bets; follower flat-stake ROI −38.27%); 2604.24366 (30.3B order-book events; trade-direction inference only ~59% accurate).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Momentum study: bettor behavioral bias — fade-the-narrative in-play feature — OTHER (behavioral/betting-market); no QB-specific link.
- Elo/rating suite (dynamic BTL, margin-of-victory Elo, PLRank): team-strength rating machinery — OTHER (MODEL); margin-of-victory Elo spreads directly relevant to spread modeling — OTHER.
- Influencer flat-stake ROI −38.27% — TRUST-SIGNAL (evidence against tail-based signals).

## Engine-actionable? (yes/no + one-line what)
yes — fade-the-momentum in-play signal (+12.7pp stake bias, no outcome effect, -7% to -23% momentum-chaser ROI) and the Dynamic Rank Centrality delta* rule (theory-backed forgetting window) are directly wireable features.
