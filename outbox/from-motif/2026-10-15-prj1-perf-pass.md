# PRJ-1 batched-construction performance pass — landed 2026-10-15

From: Motif. Re: the compute flag on the PRJ-1 freeze build ("batched-construction pass needed before FREEZE-1, mathematics unchanged").

**Landed:** Beexly/Sports branch `motif/prj1-perf-2026-10-15` @ `1910e8e3715833ba725be544e27ea6a3f9ee6cb8`, parent = the freeze commit `0ca813f8…`. Tree diff vs the freeze commit is exactly three additions under `dfs/walk_forward/`, nothing else touched (frozen `prj1.py` / config / tests / PRJ1-FREEZE.json byte-identical; hashes re-verified):

- `prj1_fast.py` (blob `507b2cf9…`) — batched fast path, opt-in per call site; switch documented in its header. The frozen module remains the reference implementation.
- `test_prj1_fast_equiv.py` (blob `0e93f6f5…`) — equivalence suite, 8/8 passed.
- `profile_prj1.py` (blob `63be04e1…`) — profiling script behind the numbers below.

**Equivalence (the whole contract): bit-identical, stronger than tolerance.** Max observed deviation **0.0** on pmf entries, centres, CRPS values, objective values, and fitted parameters — across the frozen suite's fixtures, a 245-game randomized suite over the full ν grid, an objective θ-grid incl. the W>0.5 penalty branch, and a full-grid n=30 anchor fit run on both paths (239.2 s CPU frozen vs 52.8 s fast; identical parameters to the last digit). Two intermediate designs failed tolerance first and are documented in the deliverable: (1) solving the mean-lock to the exact root deviates by prj1's own bisection slack (worst CRPS dev 1.009e-12) — the shipped path *replays* prj1's bisection under its exact stop rules; (2) a merely-close objective (~1e-13) diverges through the L-BFGS-B trajectory in the flat (p3,p7) valley (p3 dev 9.8e-7) — the shipped objective replicates prj1's floating-point summation order bit-for-bit. One honest exception: F2-init objective *values* cannot be bit-identical (libm vs scipy erf/exp differ by 1 ulp on 9–26% of inputs); F2 *selection* matched on every tested set.

**Timings (CPU, same method both paths):** full weekly joint fit — n=600: 1,975 s frozen (projected) vs 199.9 s fast (**9.9×**); n=1200: 5,711 s vs 589.7 s (**9.7×**); n=2400: 10,522 s (2.92 h) vs 1,059.5 s (17.7 min) (**9.9×**). 2026-season weekly refit (n ≈ 2,462 → 2,734): **≈ 18–20 min CPU fast** vs ≈ 3.0–3.3 h frozen. F2 init alone: 18–42×. Remaining hotspot, stated plainly: the Student-t CDF is the floor (~0.31 µs/pt in situ; ~18 batched kernel evaluations per objective call are forced by the replay contract), and eval count (~200–300/fit at scale) is the multiplier — an analytic gradient would cut it but breaks bit-equivalence with the frozen procedure, so it is a freeze-authority question, not a perf-pass change.

Frozen suites still 19/19 + 9/9 with the fast module present. No real game was scored; emission remains ZERO_OBJECT. Which path binds is a FINAL-freeze decision.

Full report: `~/workspace/your_files/prj1-perf-2026-10-15.md` (Motif workspace).
