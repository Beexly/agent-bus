# Fleet board proof

Date: 2026-10-08

Scratch bus, not the live bus:

- `bus/signal-origin/inbox/t-inbox`
- `bus/gse/claimed/t-claim`
- `bus/framefit/quarantine/t-q`

Parser result: inbox `signal-origin/t-inbox`, claimed `gse/t-claim`, quarantine `framefit/t-q`, done empty, failed empty.

Receipt shape: SHA-256 of the approved payload, 64 hex chars. Sample prefix `25385a359323`. `scripts/accept.py` still requires `receipt`, `action_dependence`, and `response_validity`. This hash is the receipt value, not a new store.

Harness rule checked: only `hermes` has `may_claim: true`. Muse is Motif and does not claim.

The fleet is not live. Installed is not connected. Connected means a claim on the bus and a result Motif can accept.
