import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import Organizers from '../components/Organizers';
import Partners from '../components/Partners';
import ContactUs from '../components/ContactUs';
import Newsletter from '../components/Newsletter';

import styles from './index.module.css';

/* function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
} */

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Content community meetups in Kraków, Poland`}
      description="Content Bytes is a community where content enthusiasts from different backgrounds share their knowledge and expertise, at the same time broadening their own.">
      <main>
        <AboutUs />
        <Events />
        <Organizers />
        <Partners />
        <ContactUs />
        {/* <Newsletter /> */}
      </main>
    </Layout>
  );
}
