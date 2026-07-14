# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Stellar TimeLock, please report it privately. We take all security concerns seriously and will respond as quickly as possible.

**Do not open a public issue.** Instead, email:

**security@stellartimelock.com** (or stellartimelock@gmail.com until the domain email is configured)

Include as much detail as possible:
- A clear description of the vulnerability
- Steps to reproduce
- Affected versions or components
- Any potential impact

We will acknowledge your report within 48 hours and provide a timeline for resolution.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x (current) | ✅ Active |
| Pre-release / beta | ⚠️ Best effort |

## Security Architecture

Stellar TimeLock is a non-custodial wallet. We never hold user funds, keys, or signing authority. Our security model is documented in [SECURITY.md](./SECURITY.md).

Key principles:
- Private keys never leave the device
- All notebook data is AES-256 encrypted with a key derived from the user's Stellar seed
- Google Drive backups are encrypted before upload
- Biometric authentication is enforced at the hardware keystore level on Android

## Responsible Disclosure

We follow responsible disclosure practices:
- Reporters will be credited in release notes (unless they prefer to remain anonymous)
- We request a 90-day disclosure window before any public discussion of the vulnerability
- We do not offer monetary bounties at this time, but we deeply appreciate the security community's help

## Scope

The following are in scope for vulnerability reports:
- The Stellar TimeLock Android application
- The Soroban smart contract (CCWDMIPD4ZTTIV5LR53PD325MS6VRGF3WJEJRKNCIKK3G7H6AXJ3UE4F)
- The open-source security modules in this repository
- The stellartimelock.com landing page

The following are out of scope:
- Third-party services (Changelly, Stripe, Google OAuth)
- Social engineering attacks
- Physical device compromise
- Issues in outdated or modified versions of the app

## Recognition

We maintain a hall of contributors in [CONTRIBUTORS.md](./CONTRIBUTORS.md). Security researchers who responsibly disclose valid vulnerabilities will be added with their permission.
