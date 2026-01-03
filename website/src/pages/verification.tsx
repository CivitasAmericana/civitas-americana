import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './verification.module.css';

function ShieldCheckIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function CheckCircleIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function FileTextIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
      <path d="M10 9H8"/>
      <path d="M16 13H8"/>
      <path d="M16 17H8"/>
    </svg>
  );
}

function TerminalIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" x2="20" y1="19" y2="19"/>
    </svg>
  );
}

function DownloadIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  );
}

function ExternalLinkIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6"/>
      <path d="M10 14 21 3"/>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}

const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEaU+MWBYJKwYBBAHaRw8BAQdA8u8TPd0LJcHmxYl+NplYlTzfcxsbLJ1BYna5
A6e0ofK0KkNpdml0YXMgQW1lcmljYW5hIDxDaXZpdGFzQW1lcmljYW5hQHBtLm1l
PoiWBBMWCAA+FiEE7TKytpRMo+irU6CUeDTNmOAWbu0FAmlPjFgCGwMFCQHhM4AF
CwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQeDTNmOAWbu0C5wEAp/C+94Ep2iUF
Awfo2BhIAH/VZ8S5mQoZgLRL+SDeW9EA/2WBIHUkXUC0/s+akz99G/kfPiLC7jZC
/4QOVSnmd5MEuDgEaU+MWBIKKwYBBAGXVQEFAQEHQHdZ+9uy+9QdTNIa804E+xoo
r7utw4hgzvIHB43Gt/8tAwEIB4h+BBgWCAAmFiEE7TKytpRMo+irU6CUeDTNmOAW
bu0FAmlPjFgCGwwFCQHhM4AACgkQeDTNmOAWbu1j3QEA59J9LE/6+S9XuY36GPn8
euVay+7gpC7FHsWs24Qcem8A/38ufmgLIN/Q/RMBabpfZmZxr7OKmIOV/xgxUr3l
0uoP
=w3q5

-----END PGP PUBLIC KEY BLOCK-----`;

const documents = [
  {
    name: "Breach_Abridged_v1.8.pdf",
    description: "The executive summary of the Declaration, detailing why the United States is governed but no longer self-governing. This document outlines the specific structural remedies required to restore solvency and consent. Easy to share.",
    fingerprint: "ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED",
    status: "Verified",
    date: "Jan 01, 2026"
  },
  {
    name: "Breach_Declaration_v1.15.pdf",
    description: "The comprehensive text of the Declaration of Civic Breach and Renewal, including all appendices. This document replaces vague political rhetoric with a specific, engineered blueprint for the restoration of the Republic.",
    fingerprint: "ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED",
    status: "Verified",
    date: "Jan 01, 2026"
  },
  {
    name: "Civitas_Papers_v1.0.pdf",
    description: "The complete collection of 15 essays serving as the philosophical architecture for the Declaration. Divided into 3 books: Diagnosis, Discipline, and Lawful Paths -- this volume establishes the intellectual foundation required to sustain a self-governing republic.",
    fingerprint: "ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED",
    status: "Verified",
    date: "Jan 01, 2026"
  },
  {
    name: "Civitas_Americana_Collected_Works_v1.0.pdf",
    description: "The complete archive as published January 2026 of the Declaration with the philosophical defense of the Civitas Papers. This single volume creates a unified, immutable record of the legal, financial, and moral requirements for American renewal.",
    fingerprint: "ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED",
    status: "Verified",
    date: "Jan 01, 2026"
  }
];

export default function Verification(): ReactNode {
  return (
    <Layout
      title="Cryptographic Verification"
      description="Verify the authenticity of Civitas Americana documents using PGP signatures.">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <ShieldCheckIcon className={styles.headerIcon} />
            </div>
            <h1 className={styles.title}>Cryptographic Verification</h1>
            <p className={styles.subtitle}>
              The documents hosted on Civitas Americana are cryptographically signed to ensure authenticity and integrity. You can download officially signed documents and verification materials here.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <CheckCircleIcon className={styles.checkIcon} />
              Chain of Custody
            </h2>
            <p className={styles.cardDescription}>
              All published documents maintain a strict cryptographic chain of custody.
            </p>
            <p className={styles.cardNote}>
              PLEASE NOTE: The website hosts convenience copies. The canonical artifacts are the signed PDFs and signed checksums in the repository root /pdf and /auth. If a website copy conflicts with repository artifacts, treat the repository as authoritative.
            </p>
            
            <div className={styles.documentList}>
              {documents.map((doc, idx) => (
                <div key={idx} className={styles.documentItem}>
                  <div className={styles.documentInfo}>
                    <a href={`/pdf/${doc.name}`} className={styles.documentName} download>
                      <FileTextIcon className={styles.fileIcon} />
                      {doc.name}
                    </a>
                    <div className={styles.documentDescription}>{doc.description}</div>
                    <div className={styles.fingerprint}>Fingerprint: {doc.fingerprint}</div>
                  </div>
                  <div className={styles.documentMeta}>
                    <span className={styles.date}>{doc.date}</span>
                    <div className={styles.badgeAndSignatures}>
                      <a href={`/pdf/${doc.name}`} className={styles.badge} download>
                        <ShieldCheckIcon className={styles.badgeIcon} />
                        {doc.status}
                      </a>
                      <div className={styles.signatureButtons}>
                        <a href={`/auth/checksums/${doc.name}.sha256.txt`} className={styles.sigButton} download>
                          <DownloadIcon className={styles.sigButtonIcon} />
                          SHA256
                        </a>
                        <a href={`/auth/checksums/${doc.name}.sha256.txt.asc`} className={styles.sigButton} download>
                          <DownloadIcon className={styles.sigButtonIcon} />
                          SHA256.asc
                        </a>
                        <a href={`/pdf/${doc.name}.asc`} className={styles.sigButton} download>
                          <DownloadIcon className={styles.sigButtonIcon} />
                          PDF.asc
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.documentItem}>
              <div className={styles.documentInfo}>
                <a href="/auth/attestations/SIGNATURE.clearsigned.asc" className={styles.documentName} download>
                  <FileTextIcon className={styles.fileIcon} />
                  SIGNATURE.clearsigned.asc
                </a>
                <div className={styles.documentDescription}>The cryptographic attestation of authorship. This clearsigned document binds the author's identity to the published works, providing verifiable proof of origin for all Civitas Americana documents.</div>
                <div className={styles.fingerprint}>Fingerprint: ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED</div>
              </div>
              <div className={styles.documentMeta}>
                <span className={styles.date}>Jan 01, 2026</span>
                <div className={styles.badgeAndSignatures}>
                  <a href="/auth/attestations/SIGNATURE.clearsigned.asc" className={styles.badge} download>
                    <ShieldCheckIcon className={styles.badgeIcon} />
                    Verified
                  </a>
                  <div className={styles.signatureButtons}>
                    <a href="/auth/attestations/SIGNATURE.clearsigned.asc" className={styles.sigButton} download>
                      <DownloadIcon className={styles.sigButtonIcon} />
                      Clearsigned
                    </a>
                    <a href="/auth/attestations/SIGNATURE.txt" className={styles.sigButton} download>
                      <DownloadIcon className={styles.sigButtonIcon} />
                      TXT
                    </a>
                    <a href="/auth/attestations/SIGNATURE.txt.asc" className={styles.sigButton} download>
                      <DownloadIcon className={styles.sigButtonIcon} />
                      TXT.asc
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.keySection}>
            <div className={styles.keyCard}>
              <div className={styles.keyHeader}>
                <TerminalIcon className={styles.terminalIcon} />
                civitas-americana-publickey.asc
              </div>
              <pre className={styles.keyBlock}>{publicKey}</pre>
              <div className={styles.keyActions}>
                <a href="/auth/civitas-americana-publickey.asc" className={styles.downloadButton} download>
                  <DownloadIcon className={styles.downloadIcon} />
                  Download Key
                </a>
              </div>
            </div>

            <div className={styles.whyCard}>
              <h3 className={styles.whyTitle}>Why Verify?</h3>
              <p>In an age of digital fabrication, authenticity is paramount.</p>
              <p>Our PGP signature guarantees that the text you read is exactly what was published, unaltered by any intermediary or algorithm.</p>
              <a href="/auth/VERIFY" className={styles.learnLink}>
                Learn how to verify signatures
                <ExternalLinkIcon className={styles.externalIcon} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
