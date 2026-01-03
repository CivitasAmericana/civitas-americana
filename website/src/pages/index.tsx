import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroGrid}></div>
      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>Est. 2026 • United States</span>
        </div>
        
        <h1 className={styles.heroTitle}>
          The United States is governed, but no longer <em>self-governing</em>
        </h1>
        
        <p className={styles.heroSubtitle}>
          A Declaration of Civic Breach and Renewal
        </p>
        
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/declaration">
            Read the Declaration
          </Link>
          <a className="button button--secondary button--lg" href="/pdf/Breach_Declaration_v1.15.pdf" download>
            Download PDF
          </a>
        </div>
      </div>
    </header>
  );
}

function PapersSection() {
  return (
    <section className={styles.papersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Civitas Papers</h2>
        <div className={styles.separator}></div>
        
        <div className={styles.papersIntro}>
          <p>
            The Civitas Papers are a series of essays devoted to the preservation of American self-government.
          </p>
          <p>
            Serving as a companion to the Declaration, these essays draw from both Federalist structure and Anti-Federalist caution to reject the false choice between strength and restraint. They are numbered, not dated—offered not as commentary on the news of the day, but as an invitation to recover the habits of constitutional thought necessary to restrain power and renew consent.
          </p>
        </div>
        
        <div className={styles.papersButton}>
          <Link className="button button--secondary button--lg" to="/papers/intro">
            Read the Papers →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Declaration of Civic Breach and Renewal. Restoration, not Rupture.">
      <HomepageHeader />
      <main>
        <PapersSection />
      </main>
    </Layout>
  );
}
