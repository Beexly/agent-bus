# docs/arxiv-program/research/2026-09-21/arxiv-deep/0042-determining-the-acceleration-field-of-a.md
## What it is (1-2 sentences)
An arXiv deep-read ledger (2026-09-21) of Wan et al.'s "Determining the acceleration field of a rigid body using three accelerometers and one gyroscope" (arXiv:2508.07464), proposing the "A3G1" algorithm to reconstruct the full head acceleration field from wearable inertial sensors, motivated by mild traumatic brain injury measurement in soccer headers. **Verdict in the ledger: REJECT** — rigorous sensor-fusion kinematics, but GSE has no wearable-sensor hardware or data pipeline, and it produces no predictive model.

## Key metrics/methods (formulas where given, else "not specified")
- Rigid-body motion: `x(τ,X) = Q(τ)X + c(τ)`; `W(τ) = Q'(τ)Qᵀ(τ)` (skew-symmetric angular-velocity matrix)
- Pseudoacceleration field: `A̅(τ,X) = Qᵀ(τ)A(τ,X) = P(τ)X + q(τ)`, with `P(τ) = W(τ)W(τ) + W'(τ)`
- Algorithm core: build fixed 9×6 matrix D from sensor positions (rows `[(∘(ᵏX))ᵀ, I₃ₓ₃]`, ℓ=1,2,3), vector M(τ) from `ᵏA(τ) − W(τ)W(τ)ᵏX`; least-squares solve `Ŝ(τ) = (DᵀD)⁻¹DᵀM(τ)` for `S(τ) = [w̄'(τ); q(τ)]` (angular + translational acceleration) — linear, no numerical differentiation of noisy gyro data
- Constraint: only placement requirement is the three accelerometers be non-collinear (D full column rank); gyroscope may sit anywhere on the body
- Validation metric: relative L²[0,T] error, `‖²Ã − ²A‖ / ‖²A‖`, Eq. 4.1–4.2

## Data sources named
Custom experimental data, not public: 5 controlled soccer-heading trials by a single subject (the first author; head circumference 59 cm, height 170 cm, weight 70 kg) wearing a 3D-printed PLA rigid sensor holder with four Vicon IMUs (each tri-axial accelerometer + tri-axial gyroscope). Analysis used accelerometers #1, #3, #4 and gyroscope #1, predicting acceleration at accelerometer #2's location as hold-out. Sensor positions in meters given (e.g., ¹X = (0.077, 0.016, −0.042)). No code or data released.

## Findings (numbers and facts, not vibes)
- Representative trial (Test #3): 6.2% relative L² error at the unsensed location
- All five trials: Test #1 6.4%, Test #2 10.5%, Test #3 6.2%, Test #4 5.8%, Test #5 11.2%
- Head modeled as a rigid body; brain deformation not measured — the link to actual mTBI requires a separate brain-injury criterion / finite-element model (acknowledged in §1)
- n = 5 trials, single subject, one motion type (soccer headers) — no external validity to NFL impacts (tackles, collisions at far higher energies)

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sensor-fusion kinematics method (A3G1 linear least-squares from 3 accelerometers + 1 gyro) — OTHER
- Per-impact head kinematics → brain-injury linkage requires a separate injury-criterion model; NFL instrumented-mouthguard data is proprietary and unavailable to GSE — OTHER
- Ledger §14 improvement idea: pair A3G1 with a learned brain-strain surrogate (CNN strain estimators cited in paper [24]) to map per-impact kinematics → predicted brain-tissue strain, then correlate with concussion diagnoses — INFERENCE: this would be the only path from this paper to any injury-prediction use

## Engine-actionable? (yes/no + one-line what)
No — rejected; no path from head-acceleration reconstruction to any GSE product metric, and no wearable input data exists.
