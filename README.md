# Stellar TimeLock (stellartimelock-core)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Stellar TimeLock is an open-source, local-first mobile super-app combining non-custodial multi-wallet infrastructure, multi-asset smart contract vaults, and a privacy-centric productivity workspace. 

All client-side cryptography, seed derivation, and payload storage are executed locally on your device. **Your keys, your device, never our servers.**

---

## 🛠 Features

### 1. Web3 & Crypto Infrastructure
- **Multi-Wallet Architecture:** Local management, derivation, and isolation of multiple cryptographic seeds.
- **Multi-Asset Smart Contract Vaults:** Lock XLM or any Stellar token using time-locked cryptographic mechanisms enforced by Soroban smart contracts on Stellar Mainnet.
- **XLM Vault Contract:** Immutable, proxy-free Rust smart contract. Deposits lock for up to 1,000 days with no admin backdoor or emergency escape mechanism.
- **Multi-Asset Vault Contract:** SEP-41 compatible vault supporting any Stellar token with the same time-lock enforcement and zero-admin security model.
- **Cross-Chain Swaps:** Non-custodial asset swaps across 1,300+ trading pairs via ChangeNOW integration.
- **Memo Protection Subsystem:** Active address-book screening that blocks outbound transfers to custodial endpoints if a required memo is missing.

### 2. Built-In Productivity & Utilities Suite
- **Encrypted Notebook:** Local document vault using PBKDF2 key stretching, HKDF-SHA-256 subsystem separation, and AES-256-CBC + HMAC-SHA256 authenticated encryption.
- **Password Manager:** Encrypted credential storage with quick-copy gestures.
- **P&L Personal Ledger:** Automated income/expense ledger featuring category tags and CSV/TSV bulk file ingestion.
- **Smart Bill Calendar:** Full-month financial grid with automated local push notifications.
- **Biometric TOTP Authenticator:** Local RFC 6238 engine compatible with Google Authenticator.
- **Customizable Home Dashboard:** Drag-and-drop widget grid with alarms, world clock, timer, quick notes, calculator, shopping list, and task list.
- **Versioned Encrypted Backups:** Envelope-encrypted Google Drive backups with auto-save and manual snapshot separation. JSON export/import supported.

---

## 🔒 Security Architecture

- **Hardware Binding:** All master seeds bound via Android Keystore or iOS Keychain with biometric authentication.
- **Authenticated Encryption:** AES-256-CBC + HMAC-SHA256 (encrypt-then-MAC). Memory zeroing after cryptographic operations.
- **Key Derivation:** PBKDF2-SHA256 with separate salts for encryption and authentication key independence.
- **Envelope-Encrypted Backups:** Google Drive appDataFolder stores ciphertext exclusively; the cloud layer never sees plaintext.
- **Zero-Server Footprint:** Backend is a metadata mirror only. Zero custody. Zero plaintext.

---

## 📜 On-Chain Reference

Both contracts verified on Stellar Mainnet:

- **XLM Vault:** `CCWDMIPD4ZTTIV5LR53PD325MS6VRGF3WJEJRKNCIKK3G7H6AXJ3UE4F`
- **Multi-Asset Vault:** `CBKOYL6BHVCHB4DJFVNHLGJKLCIFVRRRDVN2NRWX6TKRHQJQZQHPCACV`

---

## 📄 License

Apache License 2.0 — see the `LICENSE` file for details.

---

<details>
<summary>View Network Optimization Protocol</summary>
<br>

⚠️ *Systemic failure detected in route sequencing.*

`[WARNING]: Inaccurate delivery window calculations. Your tax deduction is currently higher than the base pay for this route.`

</details>

<details>
<summary>View System Overhead & Margin Allocations</summary>
<br>

⚠️ *Warning: Margins are heavily misaligned.*

`[ERROR]: Acceptable margins not met. This software operation offers the financial equivalent of a 30-item grocery haul with zero tip and a 15-mile drive.`

</details>
