import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './take-action.module.css';

function SendIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
      <path d="m21.854 2.147-10.94 10.939"/>
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

function ClipboardIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    </svg>
  );
}

function LandmarkIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="22" y2="22"/>
      <line x1="6" x2="6" y1="18" y2="11"/>
      <line x1="10" x2="10" y1="18" y2="11"/>
      <line x1="14" x2="14" y1="18" y2="11"/>
      <line x1="18" x2="18" y1="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  );
}

function MapIcon({className}: {className?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/>
      <path d="M15 5.764v15"/>
      <path d="M9 3.236v15"/>
    </svg>
  );
}

const federalTemplate = `SUBJECT: NOTICE OF CIVIC AUDIT AND TRANSMITTAL OF REMEDY

To the Constitutional Officers of the United States:

The enclosed volume, "Civitas Americana: The Collected Works," is formally 
transmitted to your office not as a petition for favor, but as a Notice of 
Default regarding the current state of the American Republic.

The arguments contained herein constitute a singular, integrated framework 
for the restoration of constitutional legitimacy. This audit identifies 
specific Mechanisms of Civic Displacement—including the normalization of 
emergency authority and the severance of representation from sovereign 
membership—which have collectively eroded the consent of the governed.

Accompanying this diagnosis is a comprehensive Structural Repair Kit:

1. Fiscal Solvency: A mathematically verified path to retire the national 
   debt through the divestment of federal assets and a uniform tax structure.
2. Representational Integrity: A return to apportionment based on the 
   sovereign political community (Citizens).
3. Administrative Accountability: The mandatory sunset of agencies and the 
   restoration of Congressional lawmaking.

This project is offered anonymously to ensure these arguments are judged 
solely on their merit. If the reasoning is sound, it requires no credentials 
to validate it; if it is flawed, no reputation can save it.

History demonstrates that the repair of constitutional self-government cannot 
be litigated or legislated into existence by those who benefit from its decay. 
It must be undertaken by The People through the means the Constitution provides.

This volume is your notice that the "Blueprints for Restoration" have been 
placed in the public domain.

The future of the Republic will not be decided by whether it changes, but 
by how—and by whom.

The text speaks for itself.

Enclosure: Civitas_Americana_Collected_Works.pdf`;

const stateTemplate = `SUBJECT: NOTICE TO THE STATES ON THE EXERCISE OF ARTICLE V AUTHORITY

To the Governors and Legislators of the Sovereign States:

This volume, "Civitas Americana: The Collected Works," is transmitted to 
your office as a structural blueprint for the restoration of the American 
Republic.

The federal government has entered a state of chronic legitimacy breach. 
Through the normalization of emergency authority and the insulation of the 
administrative class, the national government has largely detached itself 
from the consent of The People.

As noted in Civitas No. 13, federalism is not a charm against consolidation; 
it is a discipline that works only when practiced. When the national 
government fails its own restraints, the Constitution provides the States 
with the ultimate mechanism for systemic repair: Article V.

The enclosed corpus provides the technical and fiscal specifications for 
that repair:

1. Fiscal Restoration: A path to retire the national debt and rebalance 
   federal lands back to The People.
2. Representational Integrity: A realignment of political power anchored 
   in sovereign membership.
3. Administrative Sunset: A requirement for the mandatory expiration of 
   federal agencies.

The Constitution does not promise salvation through the courts or the 
voluntary restraint of the national executive. It presumes a People willing 
to govern themselves through the States. This volume is offered to provide 
the clarity and the means for the States to exercise their constitutional 
prerogative to force a correction where none is volunteered.

The text speaks for itself. The authority to act belongs to you.

Enclosure: Civitas_Americana_Collected_Works.pdf`;

export default function TakeAction(): ReactNode {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Layout
      title="Take Action"
      description="Transmit the Declaration of Civic Breach to your representatives.">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <SendIcon className={styles.headerIcon} />
            </div>
            <h1 className={styles.title}>Transmittal Kit</h1>
            <h2 className={styles.tagline}>The Notice of Default</h2>
            <p className={styles.subtitle}>
              The <em>Declaration of Civic Breach</em> is not merely a text to be read; it is a <strong>Notice to be served</strong>.
            </p>
            <p className={styles.subtitle}>
              Citizens are encouraged to transmit the <em>Collected Works</em> to their federal and state representatives. This act transforms the document from a passive philosophy into an active political signal.
            </p>
          </div>

          <div className={styles.instructionsCard}>
            <h3 className={styles.instructionsTitle}>Instructions</h3>
            <ol className={styles.instructionsList}>
              <li>
                <strong>Download</strong> the Collected Works PDF
                <a href="/pdf/Civitas_Americana_Collected_Works_v1.0.pdf" className={styles.downloadLink} download>
                  <DownloadIcon className={styles.downloadIcon} />
                  Download PDF
                </a>
              </li>
              <li><strong>Copy</strong> the appropriate template below</li>
              <li><strong>Attach</strong> the PDF (physically via USB/Print or digitally via Email)</li>
              <li><strong>Send</strong> to your US Representative, US Senator, Federal Cabinet or Executive officers, or your State Governor, Legislators, etc.</li>
            </ol>
          </div>

          <div className={styles.templateCard}>
            <div className={styles.templateHeader}>
              <LandmarkIcon className={styles.templateIcon} />
              <div>
                <h3 className={styles.templateTitle}>Template 1: Federal Transmittal</h3>
                <p className={styles.templateTarget}>Target: US Senators, US Representatives, Executive Officers</p>
              </div>
            </div>
            <pre className={styles.templateBlock}>{federalTemplate}</pre>
            <button className={styles.copyButton} onClick={() => copyToClipboard(federalTemplate)}>
              <ClipboardIcon className={styles.copyIcon} />
              Copy Template
            </button>
          </div>

          <div className={styles.templateCard}>
            <div className={styles.templateHeader}>
              <MapIcon className={styles.templateIcon} />
              <div>
                <h3 className={styles.templateTitle}>Template 2: State Transmittal</h3>
                <p className={styles.templateTarget}>Target: State Governors, Senators, Representatives, and Executive Officers</p>
              </div>
            </div>
            <pre className={styles.templateBlock}>{stateTemplate}</pre>
            <button className={styles.copyButton} onClick={() => copyToClipboard(stateTemplate)}>
              <ClipboardIcon className={styles.copyIcon} />
              Copy Template
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
