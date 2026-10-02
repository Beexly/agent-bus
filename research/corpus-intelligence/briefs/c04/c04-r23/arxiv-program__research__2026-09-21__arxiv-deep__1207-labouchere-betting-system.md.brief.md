# docs/arxiv-program/research/2026-09-21/arxiv-deep/1207-labouchere-betting-system.md
## What it is (1-2 sentences)
Deep-read ledger of Billings & Del Barco (2017), arXiv:1707.00529v1, a simulation study of the Labouchère negative-progression cancellation staking system on fair coin flips. The reader's verdict is REJECT — it confirms the textbook result that no staking system beats fair odds and contributes no usable method.
## Key metrics/methods (formulas where given, else "not specified")
Completion-time exponential fit: f(x) = 10^6·e^(−0.131x) rounds completing in x bets (R²=0.86884, 10M-round sim); 10,000-round sim: y=1026.3e^(−0.806x), R²=0.93172. g(x) = 0.1·e^(−0.131x) presented as a "probability" though it is not a valid density (integrates to 0.763). Termination probability ρ(x) = ∫₀ˣ g + 1 (noted as mathematically incoherent: ρ(∞)→0.763 yet claimed →1). Wald homogeneity test applied to the two R² values (flagged as methodologically invalid). Labouchère recursion: bet = first+last of sequence (or sole element); win → remove both ends; loss → append bet size; terminate on empty sequence or insufficient capital.
## Data sources named
Simulated coin flips via Python `random.getrandbits` (Mersenne Twister); initial sequence [$1,$2,$3] (target $6); bankrolls $0–$500,000; 10,000 and 10,000,000 simulated rounds. Code at https://github.com/jake-billings/research-labouchere (MIT); CSV exports described but not verified.
## Findings (numbers and facts, not vibes)
- Win rate rises with bankroll: 371/1000 wins at $4 bankroll → 1000/1000 at ~$40k bankroll.
- $4,000 bankroll grows near-linearly for ~6,000 bets then loses everything to one streak.
- Conclusion: only infinite capital profits; finite capital is eventually ruined.
- Methodological defects: Wald test applied to two R² point values; g(x) not a density; ρ(x) self-contradictory; Table 2 says 10,000,000 rounds in title but 100,000,000 in text; no vig, no sports data, no edge modeling.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No staking system can beat fair odds; finite bankrolls face eventual ruin under negative progression [OTHER]
- The only actionable moral noted ("don't sell negative-progression systems to followers") is content guidance, not research [OTHER]
## Engine-actionable? (yes/no + one-line what)
No — rejected ledger; nothing about +EV edge sizing (GSE's actual business) and no method to adapt.
