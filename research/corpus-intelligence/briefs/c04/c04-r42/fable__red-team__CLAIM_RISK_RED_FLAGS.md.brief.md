# docs/fable/red-team/CLAIM_RISK_RED_FLAGS.md
## What it is (1-2 sentences)
A red-team language-gate document listing 12 high-risk terms that must be downgraded unless backed by evidence, used by a claim scanner on repo content.

## Key metrics/methods (formulas where given, else "not specified")
not specified — rule-based scanner: the 12 unsupported terms are allowed only when the line marks them historical, unverified, unsupported, blocked, false, or evidence-tied.

## Data sources named
none.

## Findings (numbers and facts, not vibes)
- Flagged terms (12): legal cleared, guaranteed, lock, free money, superior edge, parity+, production-ready, .5+ gain, green tests, official NGS, Ground Truth configured, AWS deployed.
- Scanner escape conditions: term allowed when the line marks it historical, unverified, unsupported, blocked, false, or evidence-tied.
- INFERENCE: "official NGS" and "Ground Truth configured" being on the flag list indicates the corpus had prior unsupported claims about NGS data provenance and ground-truth setup.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No QB/coaching/OL/scheme/trust-signal content present. [OTHER]
- TRUST-SIGNAL (INFERENCE): the "official NGS" flag is a trust signal about data provenance — public claims must not imply NGS-official data without evidence. [TRUST-SIGNAL]

## Engine-actionable? (yes/no + one-line what)
no — claims-hygiene gate for public copy; engine-relevant only via the NGS provenance flag (don't treat "official NGS" as established without evidence).
