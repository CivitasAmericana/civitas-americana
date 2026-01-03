import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './about.module.css';

export default function About(): ReactNode {
  const imageUrl = useBaseUrl('/img/civitas-americana-figure.png');
  return (
    <Layout
      title="About"
      description="About Civitas Americana and the Declaration of Civic Breach and Renewal.">
      <main className={styles.main}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className={styles.title}>About Civitas Americana</h1>
            <div className={styles.separator}></div>
            
            <section className={styles.section}>
              <img 
                src={imageUrl} 
                alt="Civitas Americana" 
                className={styles.floatImage}
              />
              <p>
                Civitas Americana is a civic project devoted to the preservation and renewal of American self-government.
              </p>
              <p>
                It begins from a simple but demanding premise: that liberty is not secured by institutions alone, nor by sentiment, nor by periodic elections, but by a people willing to examine power wherever it is exercised. The American constitutional order was designed with uncommon care to restrain authority through structure, division, and law. Yet no design -- however wise -- can preserve its own meaning indefinitely. Where vigilance declines, power adapts.
              </p>
              <p>
                The Founders of the American republic understood this danger. They disagreed not over whether power corrupts, but over how best to contain it. The Federalists emphasized the necessity of a strong and energetic government capable of governing a large and diverse nation. The Anti-Federalists warned, with equal force, that power once granted tends to expand beyond its justification, especially when distant from the people. History has shown that both were right -- and that neither insight alone is sufficient.
              </p>
              <p>
                Civitas Americana seeks to complete this unfinished synthesis.
              </p>
              <p>
                This project affirms the necessity of lawful authority while rejecting the assumption that authority will restrain itself. It accepts the Federalist insight that liberty cannot survive chaos, and the Anti-Federalist insight that liberty cannot survive unchecked power. It therefore treats skepticism not as cynicism, but as a constitutional virtue, and renewal not as instability, but as a requirement of republican government.
              </p>
              <p>
                The centerpiece of this project is the Declaration of Civic Breach and Renewal, which articulates the principles at stake and the strains placed upon constitutional legitimacy in the modern era. Accompanying it is a series of essays titled The Civitas Papers, offered to explain, defend, and apply those principles with discipline and care. These papers are not commentary on daily events, nor prescriptions for immediate action. They are intended to restore habits of constitutional thinking that have too often been neglected.
              </p>
              <p>
                <em>Civitas</em> is a Latin term meaning citizenship understood as duty. The choice is deliberate. Self-government is not a condition inherited passively, but a practice sustained actively. A free people must do more than consent; they must attend. Where that attention fades, liberty is not overthrown -- it is neglected.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Why Anonymous?</h2>
              <p>
                This document is offered anonymously to encourage evaluation on its merits rather than on the identity, affiliation, or credentials of its author(s).
              </p>
              <p>
                This project is not aligned with any political party, faction, or personality. It advances no candidacies and endorses no platforms. Its authority, such as it is, rests solely in the coherence of its arguments and the seriousness of its purpose. The documents are offered in the belief that reasoned, lawful renewal remains possible—and that it must be pursued before frustration gives way to despair, and despair to disorder.
              </p>
              <p>
                Civitas Americana does not promise solutions without cost, nor reform without effort. It offers instead a framework for thinking honestly about power, responsibility, and self-government in a constitutional republic. Whether that framework is taken up, challenged, or ignored is a decision that belongs, finally, to the people themselves.
              </p>
              <p>
                The text speaks for itself.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Contact</h2>
              <p>
                For inquiries: <a href="mailto:CivitasAmericana@pm.me" className={styles.link}>CivitasAmericana@pm.me</a>
              </p>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
