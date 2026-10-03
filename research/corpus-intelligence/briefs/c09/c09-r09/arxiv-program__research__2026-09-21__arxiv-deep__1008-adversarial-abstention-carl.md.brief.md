# arxiv-program/research/2026-09-21/arxiv-deep/1008-adversarial-abstention-carl.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:1911.11253v1 (Laidlaw & Feizi, 2019), "Playing it Safe: Adversarial Robustness with an Abstain Option" (the assignment title string did not match the actual paper at this ID; the ledger follows the actual text). CARL jointly learns a classifier AND an abstain region instead of thresholding a margin. The ledger adapts it as GSE's "hostile market" no-bet layer — learn to skip games where inputs look adversarial (sharp steam, stale lines).
## Key metrics/methods (formulas where given, else "not specified")
- Baseline (§4): adversarially-trained classifier abstains when geometric margin γ(x) ≤ γ*; Theorem 1 gives exact natural error and an adversarial-error upper bound via the signed-margin CDF F_Γ. (Appendix A, Lemma 1: |γ̂(x1,y)−γ̂(x2,y)| ≤ ‖x1−x2‖.)
- CARL (§5, Combined Abstention Robustness Learning): single network with an extra abstain class; loss ℒ(f,x,y) = −log p_y(x) + λ·ℓ(f,x̃,y) + η‖∇_x(z_y − max_{i≠y} z_i)‖_1, where x̃ is an adversarial example generated to fool the classifier WITHOUT abstaining (six new attack losses, §6); λ dials the natural/adversarial tradeoff.
- Evaluation: six white-box attacks — four PGD variants (ℓ_abstain, ℓ_sum, ℓ_interp, ℓ_switch) + two DeepFool variants (DF, DF-Abs); adversarial error = union over all six. L∞ with ε=0.3 (MNIST), ε=8/255 (CIFAR-10).
## Data sources named
MNIST (6-layer CNN) and CIFAR-10 (WideResNet-28-5). No code stated.
## Findings (numbers and facts, not vibes)
- Table 1 (CIFAR-10): baseline γ*=0 → 77.1% correct / 0.0% abstain / 22.9% incorrect, union-attack adversarial error 50.9%. Baseline γ*=4/255 → 62.9/30.1/7.0, adv err 29.2%. Baseline γ*=8/255 → 49.7/47.7/2.6, adv err 11.7%.
- CARL ℓ⁽¹⁾ λ=1/2 → 82.1/3.7/14.2, adv err 55.2% (WORSE than baseline at low abstention). CARL ℓ⁽¹⁾ λ=1 → 68.1/30.0/1.8, adv err 35.8% (baseline wins on union attack at similar abstention: 29.2%). CARL ℓ⁽¹⁾ λ=4 → 54.3/45.3/0.4, adv err 13.9%.
- MNIST headline: CARL reduces baseline adversarial error by more than half at equal natural error; on CIFAR-10 CARL surpasses the baseline Pareto frontier overall (mixed at individual points).
- Noise abstention: 94–100% for most configs — CARL abstains on pure noise (OOD detection for free).
- Key safety stat: CARL ℓ⁽¹⁾ λ=1 → 68.1% correct, abstains 30%, outright WRONG only 1.8% on natural inputs.
- Theorem 1's tradeoff verified empirically (natural error close; adversarial bound tight for small γ*).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (no-bet/governance layer): the explicit abstain output maps to a "hostile-market no-bet head" — features = line-move magnitude since open, time-to-kickoff of the move, reverse line movement flags, news-volume anomaly, input-feature OOD score; the 1.8%-wrong stat is the goal: a board rarely outright wrong because uncertainty becomes no-bets.
- OTHER (training): adversarial-training analogue — augment training with "market-shock" scenarios (closing line moved ≥3 points against the engine's number after a news event) so the abstain head learns the steam-move signature.
## Engine-actionable? (yes/no + one-line what)
Yes — add an explicit "abstain" output to the pick model trained with a loss penalizing abstaining on would-have-been-right games but not on wrong ones, tuned to a target no-bet rate; numeric gate: cut outright-wrong-pick rate by ≥40% relative to the threshold governor at the same no-bet rate (±2 pp) with no published-set hit-rate loss.
