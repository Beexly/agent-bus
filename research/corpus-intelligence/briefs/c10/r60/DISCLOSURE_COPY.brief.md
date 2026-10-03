# strategy/fantasy-launch/DISCLOSURE_COPY.md
## What it is (1-2 sentences)
The canonical "real vs preview" disclosure language for fantasy surfaces — the single source of truth for how the launch page, tool notes, pricing card, and social copy describe what's live vs illustrative, plus a banned-word list enforced by the trust gate.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas. Feature-level inventory only.
## Data sources named
- nflverse (CC-BY-4.0) — projections/metrics derivation; attribution line "Data via nflverse (CC-BY-4.0)"; data freshness shown on the projections badge ("Live · refreshed Xh ago").
- Sleeper API — player movement facts; enrichment only, never the sole basis of a paid feature; no logos/headshots.
## Findings (numbers and facts, not vibes)
- Real now: Draft Assistant (VOR, tiers, positional scarcity, run alerts, own-ADP overlay), Best Ball (roster ceiling/spike, QB-stack correlation, bye fragility, what-to-draft-next), read-only Sleeper league sync (no writes, no autonomous moves).
- Preview/coming: Start-Sit, Waivers/FAAB, Trade — need forward weekly projections being built from cleared nflverse data; will publish with their own calibration before going live; meanwhile they run on a clearly-labelled illustrative pool.
- Any derived draft rank is labelled "market/usage rank," never "ADP," unless a real ADP source is present (e.g. the user's own imported CSV).
- Doctrine: never present illustrative data as live; never fabricate ADP.
- Banned in all fantasy copy (per trust-gate.mjs): "guaranteed," "lock"/"lock of the day," "risk-free," "free money," "winners"/"winning record," "sure thing," "AI picks."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Real-vs-preview disclosure doctrine; never fabricate ADP; never present illustrative as live (TRUST-SIGNAL)
- Banned certainty-claim words in copy (TRUST-SIGNAL)
- nflverse CC-BY-4.0 attribution as projections basis (TRUST-SIGNAL)
- QB-stack correlation as a Best Ball feature (QB-BEHAVIOR)
## Engine-actionable? (yes/no + one-line what)
Yes — the banned-words trust gate and the "never fabricate ADP / never present illustrative as live" disclosure doctrine should be ported verbatim into GSE's fantasy-output honesty rules.
