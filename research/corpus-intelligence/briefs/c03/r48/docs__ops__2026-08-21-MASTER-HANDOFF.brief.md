# docs/ops/2026-08-21-MASTER-HANDOFF.md

## What it is (1-2 sentences)
A founder handoff memo dated 2026-08-21 that inventories the GSE engine's operational state and was later adversarially audited against the code: 36 of its own claims were checked and scored 22 CONFIRMED / 7 CORRECTED / 4 REFUTED / 2 DRIFTED / 1 UNVERIFIABLE (~37% defect rate), with every [VERIFIED]-tagged claim holding.

## Key metrics/methods (formulas where given, else "not specified")
- Adversarial verification sweep: 36 claims checked — 22 confirmed, 7 corrected, 4 refuted, 2 drifted, 1 unverifiable.
- Settlement backlog at handoff time: 86/1739.
- CLV break-even: 52.4%.
- Per-sport NB2 dispersion parameter φ (flags values near φ=12 as suspicious); per-bin bootstrap confidence intervals; de-vig oracle; Anscombe 1/8 transform; MIN_GAMES floor; NHL-Poisson component.
- ESPN `limit=1000` page size; settlement `daysFrom` window changed 2→3.
- T11 settlement spec referenced.

## Data sources named
- ESPN (event feeds, `limit=1000`)
- penaltyblog (golden fixtures for Parlay MRI + de-vig oracle)
- moneypuck (license was misclassified in the handoff; corrected in audit)
- Stripe (a "Prohibited" bullet was missing the qualifier "with a monetary or material prize" — corrected)
- PayPal (claim about PayPal REFUTED)
- actionnetwork.com (competitor verified live on Stripe)

## Findings (numbers and facts, not vibes)
- Adversarial audit of the memo's own claims: 36 checked → 22 CONFIRMED, 7 CORRECTED, 4 REFUTED, 2 DRIFTED, 1 UNVERIFIABLE (~37% defect rate); every claim tagged [VERIFIED] held.
- Correction: Stripe's "Prohibited" bullet omitted the qualifier "with a monetary or material prize".
- Refutation: the PayPal claim was wrong; competitor actionnetwork.com is live on Stripe.
- moneypuck license was misclassified in the handoff (corrected).
- Settlement state: backlog 86/1739; settlement `daysFrom` window widened 2→3; T11 settlement spec.
- Calibration components listed: per-bin bootstrap CIs, per-sport NB2 dispersion φ (warn on φ=12), de-vig oracle, golden fixtures from penaltyblog for Parlay MRI, Anscombe 1/8 transform, MIN_GAMES, NHL-Poisson.
- CLV break-even threshold stated as 52.4%.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] 22/36 confirmed claims with a 37% defect rate and a published correction log — the adversarial audit itself is the trust mechanism, not the memo's original claims.
- [OTHER] Stripe qualifier correction ("with a monetary or material prize") — payment-compliance accuracy, founder-level constraint on monetization.
- [OTHER] PayPal refutation + actionnetwork.com-on-Stripe confirmation — competitor/payment facts verified, not assumed.
- [SCHEME] De-vig oracle + penaltyblog golden fixtures for Parlay MRI — market-fair pricing inputs to the engine.
- [SCHEME] Per-sport NB2 dispersion φ (warn at φ=12), Anscombe 1/8, NHL-Poisson — sport-specific calibration components.
- [OTHER] Settlement backlog 86/1739 and daysFrom 2→3 — operational health numbers for the grading pipeline.

## Engine-actionable? (yes/no + one-line what)
Yes — the adversarial-audit pattern itself (36 claims, 22/7/4/2/1 scoring) is the model for verifying every engine claim before it ships; specific corrections (Stripe qualifier, moneypuck license, settlement window) are already folded into the audit ledger.
