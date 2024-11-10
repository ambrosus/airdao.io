import styles from './styles.module.scss';
import { createClient } from '@/prismicio';
import React from 'react';

import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Seo from '@/components/Seo';
import HeroBg from '@/components/Landing/GovPortal/HeroSection/assets/background_desktop.webp';
import Content from './content';

export default function ClaimRewards({ portal, header, footerText }) {
  return (
    <>
      <Seo
        title={portal.data.meta_title}
        description={portal.data.meta_description}
        image={portal.data.meta_image.url}
        preload={HeroBg}
      />
      <HeaderWrapper header={header} showBanner={false} />
      <Content />
      <Footer
        data={footerText.data}
        footerBlock={''}
        className={styles.footer}
      />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');
  const portal = await client.getSingle('gov_portal');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('govBanner');
  const footer = await client.getSingle('footer');
  return {
    props: {
      page,
      portal,
      header,
      banner,
      footerText: footer,
    },
  };
}
