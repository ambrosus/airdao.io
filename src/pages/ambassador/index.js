import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from './components/Hero';
import Roles from './components/Roles';
import Benefits from './components/Benefits';
import homeStyles from '@/components/Homepage/homepage.module.scss';
import styles from './ambassador.module.scss';
import Image from 'next/image';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Head from 'next/head';
import React from 'react';

const AmbassadorPage = ({ header, footerText, page }) => {
  return (
    page && (
      <div className={styles.ambassador}>
        <Head>
          <meta
            property="og:image"
            content="https://airdao.io/og-ambassador.png"
          />
          <meta
            name="twitter:image"
            content="https://airdao.io/og-ambassador.png"
          />
        </Head>
        {header && <HeaderWrapper header={header} />}
        <Hero
          title={page.hero_title}
          text={page.hero_text}
          image={page.hero_image}
          primaryLink={page.hero_primary_link}
          primaryText={page.hero_primary_text}
        />
        <Roles
          title={page.roles_title}
          list={page.roles_list}
          text={page.roles_text}
          primaryText={page.roles_primary_text}
          primaryLink={page.roles_primary_link}
        />
        <div className={homeStyles['articles-wrapper']}>
          <Image
            className={homeStyles['blue-circle']}
            src={blueCircle}
            alt="blue circle"
          />
          <Image
            className={homeStyles['orange-circle']}
            src={orangeCircle}
            alt="orange circle"
          />
          <Benefits title={page.benefits_title} list={page.benefits_list} />
        </div>
        {footerText && (
          <Footer
            slices={footerText.data.slices}
            socials={footerText.data.footer_social}
          />
        )}
      </div>
    )
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('ambassador');
  return {
    props: { header, footerText: footer, page: page.data },
  };
}
export default AmbassadorPage;
