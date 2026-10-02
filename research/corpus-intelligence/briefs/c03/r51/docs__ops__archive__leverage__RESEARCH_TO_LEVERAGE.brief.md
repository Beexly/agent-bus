# docs/ops/archive/leverage/RESEARCH_TO_LEVERAGE.md
## What it is (1-2 sentences)
A one-page conversion ledger mapping every parked R&D thread to SHIPPED, STRENGTH (compliance-fence or narrative moat), or FOUNDER residual, so no thread remains an orphan "unsafe abandoned" item.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; a categorical ledger).
## Data sources named
Repo state for each thread (CRON_SECRET timing-safe, Free Gamma/Odds phase-out, Closing archive, BH-FDR/trials registry, SPIFFE/mTLS, NATS/Kafka/Redpanda, ML-KEM/SP 800-227, Pedersen/0.5b reveal, ZK/Halo2/STARK, AI Council FTC/NAD, sweepstakes/Kalshi, optical OCR/multi-cam, #226 HEOS, Phase C 5b, Sportsbook CPA).
## Findings (numbers and facts, not vibes)
1. Doctrine: "Honesty is the product. Research that cannot ship becomes a compliance fence or a future worker path — never a silent TODO that leaks into marketing." (TRUST-SIGNAL).
2. SHIPPED: CRON_SECRET timing-safe (`cronAuthError` + `@sports/util`); Free Gamma/Odds phase-out (`@sports/quote-plane` + `/api/cron/gamma`); Closing archive / self-CLV fuel (durable file store + ClosingArchive, file done, blob/Redis next); BH-FDR/trials registry (edge-lab, core; Phase-3 must call it); Pedersen/0.5b reveal (shipped design, env off); AI Council FTC/NAD (`@sports/ai-council` DESTROY seats) (TRUST-SIGNAL).
3. STRENGTH: SPIFFE/mTLS (only on real k8s workers, not Vercel); NATS/Kafka/Streams/Redpanda (bus when multi-service, not gamma path); ML-KEM/SP 800-227 (transport plane only, never PQ-wash Pedersen); ZK/Halo2/STARK ("not claimed" as the moat); Sweepstakes/casinos/Kalshi-as-us (HARD_REFUSE product path); Sportsbook CPA (HARD_REFUSE forever) (TRUST-SIGNAL).
4. FOUNDER residual: #226 HEOS, Phase C (5b), optical OCR/multi-cam (eval only DARK until measured) (OTHER).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: TRUST-SIGNAL
- Finding 2: TRUST-SIGNAL
- Finding 3: TRUST-SIGNAL
- Finding 4: OTHER
## Engine-actionable? (yes/no + one-line what)
No — R&D portfolio ledger; the "can't-ship becomes a fence, never a silent TODO" doctrine is governance, not engine method.
