# docs/arxiv-program/research/2026-09-21/arxiv-deep/0236-doublyonline-changepoint-detection-for-monitoring-health.md

## What it is (1-2 sentences)
Deep-read notes on arXiv:2206.11578v1 (Stival, Bernardi, Dellaportas, 2022), "Doubly-online changepoint detection for monitoring health status during sports activities": a Gaussian state-space model with a latent changepoint chain over repeated athletic activities that detects distributional regime changes both between activities (after each session) and within an activity in real time, demonstrated on 85 smartwatch-recorded warm-up runs. Verdict: ADAPT — port the framework to detect regime changes in NFL player workload/performance time series (injury/fatigue early warning for props, snap-count and role changes); the wearable-running application itself doesn't transfer.

## Key metrics/methods (formulas where given, else "not specified")
- Latent changepoint chain S_1:N with S_1 = 1, S_n − S_{n−1} = 1 iff changepoint at activity n; transition p(S_n|S_{n−1}) = λ for a new segment (λ = 0.5 in application).
- Measurement: y_{n,t} = [Z^(S)_θ  Z^(A)_θ] [α_t^(s); α_{n,t}] + ε_{n,t}, ε ~ N_P(0, Σ_θ) (Eq. 1); segment-specific latent trend α_t^(s) + activity-specific disturbance α_{n,t}; block-diagonal state transitions (Eqs. 2–4).
- Inference: online EM (Yildirim et al. 2013) with SMC approximation of changepoint predicted probabilities (constant complexity); Kalman filter/smoother for latent states.
- Doubly-online: between-online (process each completed activity, update parameters, retrospective segmentation) and within-online (during an activity, posterior P(D_n = 1 | y_{n,1:t}, past) at every time point t).
- Changepoint rule: p̂(D_n = 1 | y_{1:n,1:T}) > δ, δ = 0.5 in application (Eq. 14).
- Application spec: HR = linear trend + random walk; speed = local level + AR(1) with coefficient ρ_sp; θ = {Σ, Ψ, Δ, ρ_sp} estimated by 30 EM restarts; diffuse initialization.
- Three dependence sources: between-activity (segment states), within-activity autocorrelation, contemporaneous cross-variable covariance (full unstructured Σ, Ψ, Δ).

## Data sources named
- 85 consecutive warm-up running activities from one well-trained athlete: first 10 minutes of running on flat routes (altitude range < 10 m), sampled every second (T = 600), via Polar v800 watch + Polar H10 HR monitor; variables = heart rate (bpm), speed (m/s).
- Simulation: N = 1000 activities, T ∈ {60, 120, 240}, P = 2, 50 randomly placed changepoints; 20 replications per setting.
- No code or data links in text; supplementary material available on request to mattia.stival@unipd.it. Not open-source.

## Findings (numbers and facts, not vibes)
- Simulation between-online: high specificity maintained across δ; sensitivity decreases as δ increases, significantly for T = 60/120, stable for T = 240; sensitivity prioritized over specificity (missing a health problem worse than a false alarm).
- Within-online: detection hard at t = 40 (early), "satisfactory" after observing 2/3 of series (t = 80); sensitivity drops with δ and with smaller t.
- Real data: 34 estimated changepoints in 85 activities, of which 19 are single-activity segments (high between-activity variability); 15 of 19 in the last 43 activities attributed partly to systematic measurement errors (probable device malfunction) — the method detected the device problem, not just physiology.
- Within-online case studies: activity 21 flagged (P ≈ 1 after ~20 s — elevated HR at same speed); activity 33 flagged after ~2 min (low HR + low speed = low effort); activity 39 flagged (low HR, normal speed = improved fitness); activity 32 correctly not flagged (P ≈ 0 throughout).
- No head-to-head against simpler alternatives (CUSUM, BOCPD, offline PELT) on real data; k* = 0 truncation a "necessary practical choice" for large T (scalability caveat); λ = 0.5 fixed arbitrarily; computational cost not reported; 30 EM restarts per new activity could be heavy for real-time deployment.
- NFL test bar: precision/recall of detected changepoints against injury-report weeks (±1 week) and role-change weeks (snap-share shifts >15pp) on nflverse 2019–2024; require recall ≥ 0.6 on injury weeks at specificity ≥ 0.8; beat CUSUM on F1; alert volume ≤2 flags per team-week on average.
- Acceptance gate: accept if it beats CUSUM on F1 on 2019–2023 with justified alert volume; reject if changepoint rate is as high as the paper's (40% of activities) on NFL data (pure noise for betting) or if EM fails to converge on short 17-game series — fall back to BOCPD.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no formal online changepoint/regime-detection framework exists in the GSE corpus — new capability: (a) between-online detection on player weekly series (EPA/play, snap share, NGS speed metrics) as injury/fatigue early warning for props; (b) team-level regime detection on offensive EPA/play to trigger GSE model refits instead of fixed retraining windows; (c) within-online analog for live betting (in-game real-time changepoint probability).
- TRUST-SIGNAL: 34 changepoints in 85 activities (40%) is a very high rate — δ = 0.5 may be over-aggressive; the reject gate (changepoint rate that high on NFL data = pure noise) is the trust safeguard.
- COACHING: same framework detects team regime changes (coordinator/QB changes, scheme shifts) for retrospective coaching evaluation, as demonstrated descriptively on Tottenham in the state-space paper.
- OTHER: paper's own proposed future work — covariate-dependent changepoint prior λ(X_n) (injury history, age, snap load, days rest) — is directly implementable for NFL; NFL week-to-week variance is dominated by game script, so block-diagonal restriction should be relaxed to let spread/pace modulate week states.
- SCHEME: market-response angle — flagged-regime player props may show systematic line value if books are slow to adjust to role changes; the paper stops at detection, GSE's edge is the market lag.

## Engine-actionable? (yes/no + one-line what)
Yes — build a between-online changepoint monitor over weekly player series (EPA/play, snap share, NGS speed/acceleration) with P(changepoint) > δ alerting that triggers a prop-model fade/investigate flag and a features freeze until the new segment has ≥3 weeks, plus a team-level variant to trigger model refits; gated on beating CUSUM on F1 against injury/role-change ground truth on 2019–2023.
