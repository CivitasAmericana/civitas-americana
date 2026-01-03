# Verification

This repository publishes cryptographic signatures to allow independent verification of document integrity and authorship.

All canonical documents are signed using a PGP key associated with the civic identity *Civitas Americana*. Verification does not require trust in this repository, only verification of cryptographic signatures.

The website hosts and displays convenience copies. The canonical artifacts are the signed PDFs and signed checksums in the repository root `/pdf` and `/auth`.

If a website copy conflicts with repository artifacts, treat the repository as authoritative.

---

## Public Key

The public key used to sign documents in this repository is:

- `civitas-americana-publickey.asc`

Import the key using:

    gpg --import civitas-americana-publickey.asc

---

## Canonical Documents

The authoritative, signed documents are provided in PDF form.  
Markdown files are provided for readability and web presentation and are not cryptographically authoritative.

---

## Verifying the Abridged Declaration

### Required files

- `pdf/Breach_Abridged_v1.8.pdf`
- `pdf/Breach_Abridged_v1.8.pdf.asc`
- `auth/checksums/Breach_Abridged_v1.8.pdf.sha256.txt`
- `auth/checksums/Breach_Abridged_v1.8.pdf.sha256.txt.asc`

### Step 1: Verify the detached signature

From the repository root:

    gpg --verify pdf/Breach_Abridged_v1.8.pdf.asc pdf/Breach_Abridged_v1.8.pdf

You should see:

    Good signature from "Civitas Americana <...>"

---

### Step 2: Verify the checksum signature

    gpg --verify auth/checksums/Breach_Abridged_v1.8.pdf.sha256.txt.asc auth/checksums/Breach_Abridged_v1.8.pdf.sha256.txt

---

### Step 3: Verify the checksum matches the PDF

The checksum file is written relative to the `pdf/` directory.

    cd pdf
    shasum -a 256 -c ../auth/checksums/Breach_Abridged_v1.8.pdf.sha256.txt
    cd ..

You should see:

    Breach_Abridged_v1.8.pdf: OK

---

## Verifying the Full Declaration

### Required files

- `pdf/Breach_Declaration_v1.15.pdf`
- `pdf/Breach_Declaration_v1.15.pdf.asc`
- `auth/checksums/Breach_Declaration_v1.15.pdf.sha256.txt`
- `auth/checksums/Breach_Declaration_v1.15.pdf.sha256.txt.asc`

### Step 1: Verify the detached signature

    gpg --verify pdf/Breach_Declaration_v1.15.pdf.asc pdf/Breach_Declaration_v1.15.pdf

---

### Step 2: Verify the checksum signature

    gpg --verify auth/checksums/Breach_Declaration_v1.15.pdf.sha256.txt.asc auth/checksums/Breach_Declaration_v1.15.pdf.sha256.txt

---

### Step 3: Verify the checksum matches the PDF

    cd pdf
    shasum -a 256 -c ../auth/checksums/Breach_Declaration_v1.15.pdf.sha256.txt
    cd ..

You should see:

    Breach_Declaration_v1.15.pdf: OK

---

## Attestation

A clear-signed attestation is provided at:

- `auth/attestations/SIGNATURE.clearsigned.asc`

This file is human-readable and cryptographically signed.

To verify the clearsigned attestation:

    gpg --verify auth/attestations/SIGNATURE.clearsigned.asc


To verify the detached attestation pair:

    gpg --verify auth/attestations/SIGNATURE.txt.asc auth/attestations/SIGNATURE.txt

---

## Other Documents

You can similarly use these methods to verify the Civitas Papers document and the Civitas Americana Complete Works document.

