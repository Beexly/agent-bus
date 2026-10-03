# docs/arxiv-program/research/2026-09-21/arxiv-deep/1353-statistical-profitability-social-media-sports-betting-influencers.md
## What it is (1-2 sentences)
A survivorship-bias-free audit of 5,467 pre-match Nigerian sports-betting influencer bets (~$4.8M tracked, verified against Stake.com slip URLs) showing tipsters lose 25.24% collectively while followers lose 38.27% under flat staking, with four staking strategies simulated and affiliate incentives quantified. Verdict: ADAPT — the pre-match verification methodology is a portable tout-audit pipeline for GSE's competitive-intel lane.
## Key metrics/methods (formulas where given, else "not specified")
- ROI = (Total Payout − Total Stake)/Total Stake; Capital Loss = −ROI; Win ≡ payout > stake.
- Affiliate commission = (0.03 × Wagered / 2) × Commission Rate (10% standard) — pay depends on volume, not accuracy.
- Four staking simulations: Flat (S = C); Inverse (S = C/O); Square Root (S = C/√O); Fixed Return (S = P/(O−1)).
- Odds-size segmentation: Low (<10), Medium (10–100), High (>100). ANOVA on strategy effect and tipster effect.
- Survivorship-bias-free collection: only pre-match tips from complete channel histories; 21 voided bets (odds ≤ 1.00) excluded.
## Data sources named
- 5,467 verified pre-match bets, July 25 2023–Aug 24 2025: @mrbanks 3,677 bets/$4.31M; @louiedi13 1,178/$0.32M; @bossolamilekan1 612/$0.16M; ~$4.8M tracked.
- Full Telegram channel histories (keyword-filtered for Stake.com links), outcomes verified against Stake.com slip URLs; currencies standardized to USD (Aug 2025 rates).
- Combined reach: 4.0M X followers + 676,546 Telegram subscribers.
- Platform generalizability check: Stake.com payout 93.21% vs 92.95% market average across 8 bookmakers (OddsPortal 2025); Stake ranks 4th, within 0.49 pp mean absolute difference.
## Findings (numbers and facts, not vibes)
- Overall win rate 10.39% (568/5,467); @mrbanks 6%, @louiedi13 10%, @bossolamilekan1 24% — but higher win rate ≠ profitability.
- Influencers' own stakes: collective −25.24% ROI (BOM −9.30%, Louie −20.75%, Banks −26.60%).
- Follower flat-staking simulation: −38.27% ROI; per-tipster follower losses 29–43%.
- Odds categories: Low (<10) −10% loss; Medium (10–100, ~50% of sample) net loss; High (>100) −74% loss.
- Staking strategies: none profitable — Fixed Return least bad, then Inverse, then Square Root, Flat worst (fastest depletion).
- ANOVA: strategy effect significant (p = 2.12e−7); tipster effect not (p = 0.1246) — no influencer statistically superior.
- Descriptives: mean stake $877.15 (median $300.03); mean odds 63,525 (median 265); mean payout $655.72 (median $0).
- Limitations: Stake.com only; static follower behavior; only 3 mega-influencers on affiliate models; deletion of losing posts not quantified (the silent half of survivorship bias).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-match capture + third-party slip verification as the tout-audit design → directly maps to GSE's "every pick public, every result posted" doctrine; the survivorship-bias-free pipeline is the audit standard for competitive tout dossiers [TRUST-SIGNAL].
- No staking strategy rescues a −EV tip stream (Flat worst, Fixed Return least bad) → honest anti-tout positioning: "play singles like a responsible adult"; sizing cannot fix negative expectation [OTHER].
- Affiliate commission formula (pay on volume, not accuracy) → explains tout incentive misalignment; reusable backbone for GSE anti-tout content [TRUST-SIGNAL].
- Tipster effect not significant (p = 0.1246) → no evidence any influencer is superior; supports "fade the tout" framing [OTHER].
- INFERENCE: the four naive staking strategies form a ready-made baseline battery that GSE's Kelly/dynamic sizing must beat on its own pick history.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the tout-audit pipeline (timestamped pre-match pick capture + third-party verification + four-strategy staking battery) as GSE's competitive-intel/audit infrastructure and anti-tout content backbone.
