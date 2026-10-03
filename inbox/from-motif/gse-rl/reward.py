"""GSE-RL reward function (v2 — Brier skill score).

v1 (correctness +/-1 minus K*|prob-outcome|) FAILED its sanity gate:
with a 54.9% home base rate, honest base-rate picking scored -0.87 while
abstaining scored 0.0 — RL would have learned to never pick. The gate caught
it before any GPU burned. This is v2.

Reward = Brier skill score vs. the frozen base-rate predictor:
    reward = 1 - brier / BRIER_BASELINE
    brier = (stated_prob - outcome)^2
    BRIER_BASELINE = P0 * (1 - P0), P0 = 0.5485 (2022-2024 home win rate, frozen)

Properties:
- Perfect predictor -> +1.0
- Base-rate predictor (no edge) -> 0.0, same as abstaining
- Worse than base rate -> negative
- Confident-and-wrong is punished hard by the square: P=0.9, wrong -> -2.28
- Abstention -> 0.0 (never punished); +0.1 honesty bonus on genuinely thin evidence
- This is a PROPER scoring rule: the model's expected reward is maximized by
  stating its true belief. Honesty is the gradient, not a constraint.

The training harness must enforce pick/prob coherence separately
(pick == (stated_prob >= 0.5)); incoherent outputs are a format violation,
not the reward function's concern.
"""

P0 = 0.5485  # frozen 2022-2024 home win rate
BRIER_BASELINE = P0 * (1.0 - P0)  # 0.2476
HONESTY_BONUS = 0.1


def _clip(p):
    if p is None:
        return 0.5
    return max(0.0, min(1.0, float(p)))


def compute_reward(pick, stated_prob, actual_home_win, abstained=False, evidence_thin=False):
    """Scalar reward for one RL episode (one game).

    pick: True (home) / False (away) / None (abstain)
    stated_prob: model's P(home win) in [0, 1]; None if abstained
    actual_home_win: bool ground truth
    """
    if abstained or pick is None:
        return HONESTY_BONUS if evidence_thin else 0.0
    outcome = 1.0 if actual_home_win else 0.0
    brier = (_clip(stated_prob) - outcome) ** 2
    return 1.0 - brier / BRIER_BASELINE
