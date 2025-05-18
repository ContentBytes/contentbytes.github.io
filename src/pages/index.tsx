import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import Organizers from '../components/Organizers';
import Partners from '../components/Partners';
import ContactUs from '../components/ContactUs';
import Newsletter from '../components/Newsletter';

import styles from './index.module.css';


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
        <Newsletter />
      </main>
    </Layout>
  );
}
