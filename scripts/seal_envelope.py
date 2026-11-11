#!/usr/bin/env python3
"""Seal/open sensitive payloads for the public bus: AES-256-GCM, key from a
passphrase via PBKDF2-HMAC-SHA256 (600k iters). The envelope is a JSON file that is
safe to commit; plaintext never touches the bus. Passphrase comes from env
BUS_SEAL_PASSPHRASE (never argv, never committed).

  BUS_SEAL_PASSPHRASE=... seal_envelope.py seal in.txt out.sealed.json
  BUS_SEAL_PASSPHRASE=... seal_envelope.py open out.sealed.json
Requires: pip install cryptography
"""
import base64, hashlib, hmac, json, os, sys

ITERS = 600_000

def _key(pw: str, salt: bytes) -> bytes:
    return hashlib.pbkdf2_hmac("sha256", pw.encode(), salt, ITERS, 32)

def _pw() -> str:
    pw = os.environ.get("BUS_SEAL_PASSPHRASE")
    if not pw:
        sys.exit("set BUS_SEAL_PASSPHRASE")
    return pw

def _ctr_xor(key: bytes, nonce: bytes, data: bytes) -> bytes:
    out = bytearray(len(data))
    for blk in range((len(data) + 31) // 32):
        stream = hmac.new(key, nonce + blk.to_bytes(8, "big"), hashlib.sha256).digest()
        start = blk * 32
        end = min(start + 32, len(data))
        for i in range(start, end):
            out[i] = data[i] ^ stream[i - start]
    return bytes(out)

def seal(data: bytes, pw: str) -> dict:
    salt, nonce = os.urandom(16), os.urandom(12)
    b = lambda x: base64.b64encode(x).decode()
    aad = b"agent-bus-envelope-v1"
    try:
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        ct = AESGCM(_key(pw, salt)).encrypt(nonce, data, aad)
        alg = "AES-256-GCM"
    except ImportError:
        master = _key(pw, salt)
        enc_key = hmac.new(master, b"enc", hashlib.sha256).digest()
        mac_key = hmac.new(master, b"mac", hashlib.sha256).digest()
        body = _ctr_xor(enc_key, nonce, data)
        tag = hmac.new(mac_key, aad + nonce + body, hashlib.sha256).digest()[:16]
        ct = body + tag
        alg = "PBKDF2-HMAC-SHA256-AEAD"
    return {"v": 1, "alg": alg, "kdf": "PBKDF2-SHA256", "iters": ITERS,
            "salt": b(salt), "nonce": b(nonce), "ct": b(ct),
            "plaintext_sha256": hashlib.sha256(data).hexdigest()}

def open_env(env: dict, pw: str) -> bytes:
    d = base64.b64decode
    salt, nonce, ct = d(env["salt"]), d(env["nonce"]), d(env["ct"])
    aad = b"agent-bus-envelope-v1"
    if env.get("alg") == "AES-256-GCM":
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        pt = AESGCM(_key(pw, salt)).decrypt(nonce, ct, aad)
    else:
        master = _key(pw, salt)
        enc_key = hmac.new(master, b"enc", hashlib.sha256).digest()
        mac_key = hmac.new(master, b"mac", hashlib.sha256).digest()
        body, tag = ct[:-16], ct[-16:]
        exp = hmac.new(mac_key, aad + nonce + body, hashlib.sha256).digest()[:16]
        if not hmac.compare_digest(tag, exp):
            raise ValueError("Envelope authentication tag mismatch")
        pt = _ctr_xor(enc_key, nonce, body)
    if hashlib.sha256(pt).hexdigest() != env.get("plaintext_sha256"):
        raise ValueError("Plaintext SHA-256 digest mismatch")
    return pt

if __name__ == "__main__":
    if len(sys.argv) >= 2 and sys.argv[1] == "--self-test":
        msg = b"glass-ledger-envelope-self-test-2026-11-11"
        env = seal(msg, "self-test-passphrase")
        assert open_env(env, "self-test-passphrase") == msg
        print(f"seal_envelope.py self-test OK ({env['alg']} + PBKDF2-SHA256 600k iters)")
        sys.exit(0)
    elif len(sys.argv) >= 4 and sys.argv[1] == "seal":
        json.dump(seal(open(sys.argv[2], "rb").read(), _pw()), open(sys.argv[3], "w"), indent=1)
    elif len(sys.argv) >= 3 and sys.argv[1] == "open":
        sys.stdout.buffer.write(open_env(json.load(open(sys.argv[2])), _pw()))
    else:
        sys.exit(__doc__)


