# ops/archive/dated/PUBLIC_HONESTY_DEMO_SCRIPT.md
## What it is (1-2 sentences)
Archived dated demo script distinguishing shipped vs pending honesty surfaces: what runs on main today (PRs #206/#207/#208 merged; #209 open), a 7-step shipped demo, what cannot be demoed at any merge state, a 90-second version, and NON-CLAIMS.
## Key metrics/methods (formulas where given, else "not specified")
Sample-floor constants named, no formulas: pundit hit rate withheld below 25 decided calls; gate reason codes `FIRE`, `NO_BET_LCB`, `NO_BET_WIDTH`, `INSUFFICIENT_CALIBRATION`, `NOT_EVALUATED_MISSING_INPUTS`; "three kinds of no" — no bet (judged vs settled history), not judged (stratum < 100 settled picks, never asked), not evaluated (missing inputs).
## Data sources named
None external. Surfaces: `/airwave` (pundit scorecards), `/integrity`, `/.well-known/receipt-keys.json` (published keyring for receipt verification), `/board` (passes with plain-language reasons + entitled auditable trail), `/board/gate` (runs `applySelectiveGate` live), `/stats/compare`, `/pricing`.
## Findings (numbers and facts, not vibes)
- Shipped on main: pundit rate withheld <25 decided calls (counts shown, % withheld entirely); `/board` gives every reader a plain-language pass reason and entitled holders the auditable trail (reason code, confidence at refusal, model version, evidence count) withheld server-side, never CSS-hidden; `/stats/compare` names the unresolved player ID instead of substituting; `/board/gate` runs production `applySelectiveGate` on illustrative inputs (caveat stated: real gate, labelled inputs).
- Cannot be demoed: Glass Ledger publishes nothing (`PUBLISH_LEDGER` off); no live win rate/ROI/CLV exists (all gated behind `renderableMetricOrNull`/`assertDisplaySubstantiated`); the gate does not yet drive `/board` published picks (Pick × Odds join unverified); `FiredDecision` has no production writer; no SOC 2/ISO 27001/EU AI Act certification.
- Merged at doc time: #207 (317c2764) → #206 (bb248c9a) → #208 (96ae7024); only #209 (gate consumer) remained open.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: product-honesty demo script — relevant to public-presentation policy, not football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — archived product demo doc; sample floors (25 calls, 100-pick strata) are public-display policy, not engine model logic.
