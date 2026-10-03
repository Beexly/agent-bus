# design/FLAGSHIP_WEBSITE_2026_AUDIT.md
## What it is (1-2 sentences)
Phase-0 baseline audit of the 2026 flagship GSE website rebuild: 1–5 scores across 10 dimensions for every major public and cockpit surface, a ranked list of top gaps, and a Phase-1 progress log (nav condensation + kinetic logo shipped 2026-06-20).

## Key metrics/methods (formulas where given, else "not specified")
- **Scoring dimensions (10):** Visual intelligence, Interaction depth, Information hierarchy, Brand fit, Nav clarity, Mobile, Conversion path, Trust/proof, Perf risk, A11y risk — each scored 1 (poor) to 5 (best-in-class)
- **Method:** operator-scored baseline (subjective, no external measurement described — not specified beyond the dimensions)
- **Nav metric:** 10 doors → 4 (Board, Players, Intelligence, Fantasy & Daily) + The Beat — shipped 2026-06-20, scored 1→4 on nav clarity
- **Proof surfaces score 5/5 on Trust/proof:** Proof of Record (Merkle proof substance), Calibration Report (honest-band gating), CLV (beat-the-close benchmark), Trust Ledger, Accountability (hub → "The Proof Room" consolidation)
- **Weakest consistent axis:** Interaction depth — Intelligence landing (2), Metrics (1), all proof pages (2) are read-only; owner's #1 directive is *no read-only*
- **Phase-1 verification:** nav change + kinetic logo landed with typecheck + build green, zero dead links, no new routes; kinetic logo disabled under `prefers-reduced-motion`, no autoplay audio; `LOGO_GUIDELINES.md` + guard test added

## Data sources named
- Internal app routes audited: `/`, `/board`, `/house`, `/players`, `/intelligence`, `/intelligence/engines`, `/intelligence/metrics`, `/proof`, `/performance`, `/clv`, `/ledger`, `/accountability`, `/the-beat`, `/academy`, `/fantasy`, `/fantasy/lineup`, `/fantasy/dfs`, `/optimizer`, `/pricing`; code surfaces `nav.tsx`, `brand-*.tsx`
- Named facts: 11 `?view=` lenses on `/players` exposed as confusing conceptual tabs; 11 engines on `/intelligence/engines` (jargon-dense, stagnant outputs); 4-wing Academy hub; DFS suite has a strong interactive optimizer; Start-Sit Helper has real what-if interaction (was mislabeled "Optimizer")

## Findings (numbers and facts, not vibes)
- Top gaps ranked: (1) nav sprawl 10→4 — fixed in rebuild ✅; (2) read-only surfaces across Intelligence landing, Metrics, all proof pages, The Beat ledger; (3) The Beat under-used — ledger today, intended as cinematic broadcast flagship; (4) Players 11-subtab confusion → collapse to Lab + Edge + lenses/filters; (5) proof scattered across 5 routes → consolidate into one branded surface (**The Proof Room**); (6) static logo → kinetic signature + favicon + optional sting; (7) mobile second-class
- Every proof surface scores Trust/proof = 5 but Interaction = 2: Merkle proof substance exists, beat-the-close CLV benchmark exists, honest-band gating on calibration exists — all under-surfaced or scattered from peers
- Brand-fit scores run 3–4 across surfaces against the "premium low-light terminal, We detect. You decide." target
- 2026-06-20 Phase 1: nav condensed 10→4 doors (desktop + mobile parity); DFS→Daily rename; "Lineup Optimizer"→"Start-Sit Helper"; "Receipts"→"The Proof Room" grouping; Trend Lab moved under Players; Academy folded under Intelligence ("Learn the Signal"); kinetic logo signature: sub-1s draw-on + lock (orbit → vectors → core/ping → wordmark → glow decay) on header lockup, opt-in `kinetic` on `LogoMarkInline`
- Logo gaps named: no kinetic signature, no favicon variant, no sound

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Proof infrastructure already exists and scores 5/5 on trust substance (Merkle receipts, honest-band calibration gating, CLV beat-the-close) — consolidation into The Proof Room is the trust-maximizing move
- [TRUST-SIGNAL] "No read-only" directive forces proof surfaces to be interactive — receipts that users can filter/scrub/verify, not static claims
- [OTHER] Site exposes interactive DFS optimizer + start-sit what-if tool — live functional surfaces, not just content; engine wiring lane can surface real engine outputs here
- [OTHER] Naming renames recorded (Optimizer→Start-Sit Helper, Receipts→The Proof Room, DFS→Daily) are brand/claim-governance decisions worth preserving

## Engine-actionable? (yes/no + one-line what)
YES — wire real engine data into the interactive surfaces (DFS optimizer, start-sit what-if, Proof Room) so they compute from live signals instead of reading static; consolidate the five proof routes into The Proof Room.
