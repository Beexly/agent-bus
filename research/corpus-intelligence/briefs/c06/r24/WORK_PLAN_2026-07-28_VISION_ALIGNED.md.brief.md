# ops/archive/dated/WORK_PLAN_2026-07-28_VISION_ALIGNED.md
## What it is (1-2 sentences)
The 2026-07-28 aligned work plan (vision: "Refusal-Native Forecasting," honesty made structural), with workstreams hardest-first, statuses, and a detailed WS5 finding on wiring the walk-forward taxonomy harness.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration spine: PAV/IVAP/CVAP + Mondrian intervals; trust primitives: Merkle receipts live at /verify; Pedersen commitment live sealed-side (0.5), proven gated open-side (0.5b).
- Selective gate as sole FIRE/NO_BET authority.
- WS5 method: `walk-forward-taxonomy-source.ts` adapter converts real nflverse-shaped RawScheduleRow[] into WalkForwardTaxonomyRow[] with genuine context; `covered`/`width`/`residual` left unset when absent (harness contract never invents them).
## Data sources named
- nflverse schedules (games.csv, CC-BY-4.0) as real settled-outcome source; HEOS replay source (founder-gated behind PR #226, blocked).
## Findings (numbers and facts, not vibes)
- Status at write time: WS0a/WS0b (PR #236), WS2 (real CVAP contract bug found+fixed on second fuzz input), WS3, WS5 DONE; WS6/WS1/WS8 blocked on HEOS PR #226 founder merge; WS4/WS7 queued; WS9 founder-blocked gate flips.
- Real settled outcomes + real pre-outcome game context exist in-repo (historical-replay.ts with FROZEN scoreGame + real final scores, no-lookahead discipline); real calibrated covered/width/residual do NOT exist in-repo (needs MIN_STRATUM_CALIBRATION = 100 settled rows per Mondrian stratum).
- Synthetic fixture rows are prefixed `synthetic:` and labeled test-coverage-only, never measured.
- Do-not-touch list: LIVE_BOARD off in git, 6h odds budget never widens, pav/ivap never rewritten without proven bug+tests, no invented ROI/win-rates, Pedersen never "ZK"/"post-quantum", HEOS replay ≠ public tips.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: refusal-native doctrine, Merkle/Pedersen trust primitives, no invented ROI, synthetic-vs-measured labeling.
- OTHER: calibration stack (PAV/IVAP/CVAP/Mondrian), nflverse replay harness design, founder-gating discipline.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the context-only wiring rule: never fabricate coverage/width/residual; require ≥100 settled rows per Mondrian stratum before computing intervals.
