# arxiv-program/research/2026-09-21/arxiv-deep/1567-uniform-confidence-bands-joint-angles.md

## What it is (1-2 sentences)
Research ledger on "Uniform confidence bands for joint angles across different fatigue phases" (Bastian, Basu, Dette 2025, arXiv:2502.08430) — a functional-data-theory note constructing simultaneous bootstrap confidence bands around phase-mean curves after change-point detection on lab treadmill knee-angle data. The ledger's verdict is REJECT: no predictive component, no injury outcome, requires per-stride biomechanical curves GSE cannot obtain at NFL scale; replaced by 2309.00756.

## Key metrics/methods (formulas where given, else "not specified")
- Three-step pipeline: BINSEG change-point detection (Bastian et al. 2024) → relevant-change selection (‖μᵢ−μᵢ₋₁‖∞ > Δ, data-driven Δ = ‖μ̂_final−μ̂_initial‖∞/3) → simultaneous bands μ̂±ᵢ(t) = μ̂ᵢ(t) ± σ̂(t)q̂*_{1−α/2}/√n̂ᵢ, quantile from multiplier (Gaussian) block bootstrap on residuals with long-run variance σ̂² = Σ_{l=−c}^{c}σ̂²_l K(l/c).
- Theorem 2.1: liminf coverage ≥ 1−α−β (β = change-selection level), exactly 1−α when no jump sits at Δ. Assumptions: Dette & Kokot 2022 conditions (A1)-(A4) (stationarity, mixing, moments), σ(t)²>0, consistent change-point estimators.

## Data sources named
Marker-based optical motion-capture knee-angle data from runners on treadmill lab fatigue protocol (Univ. of Twente collaboration; runners A and B, n=1830 strides); data from collaborators R. van Middelaar and A. Balasubramaniam — not public. No code repository link.

## Findings (numbers and facts, not vibes)
- Runner A: Δ=6.6, 3 phases; runner B: Δ=8, 1 change; left-knee comparison Δ=5.9.
- Qualitative: fatigue phase shows reduced knee bending while foot is in air (second peak shift), consistent with Zandbergen et al. 2023 "protection mechanism."
- No numeric accuracy results, no baselines, no train/test split, no numeric metric tables — theoretical validation only (asymptotic coverage).
- Ledger's adversarial notes: Δ threshold ad hoc; coverage asymptotic (finite-sample behavior on short series unstudied); input is per-stride joint-angle curves from optical mocap — NGS provides aggregate speed/acceleration, not stride curves; lab treadmill exhaustion ≠ NFL game fatigue.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — none actionable; no injury or performance outcome; GSE needs point predictions and calibrated probabilities, not simultaneous bands on stride curves. The closest conceivable adaptation (change-point detection on workload series) belongs to the predecessor paper or standard PELT/BINSEG, not this note.

## Engine-actionable? (yes/no + one-line what)
No — REJECT; no predictive claim, no build recommended; replaced by ledger 2309.00756.
