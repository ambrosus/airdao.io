import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';

import { Button } from '@airdao/ui-library';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import { useState } from 'react';
import Steps from '@/components/Landing/Steps';
import styles from './landing.module.scss';
import Cards from '@/components/Landing/Cards';
import ParticleIcon from '@/components/Icons/ParticleIcon';
import BannerMap from '@/components/Landing/BannerMap';

export default function Landing({
  page,
  header,
  banner,
  footerText,
  latestArticles,
}) {
  const { data } = page;
  const footerSlice = getFooterBlockSlice(data);
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <div className={styles.landingpage}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og.png" />
        <meta name="twitter:image" content="https://airdao.io/og.png" />
      </Head>
      <HeaderWrapper header={header} showBanner={showBanner} />
      <div className={styles.content}>
        <BannerMap />
        <div className={styles.insetRound}>
          <div className="container">
            <h3 className={styles['content-title']}>
              Embark on your Governance journey in 3 steps
            </h3>
            <Steps />
            <h2 className={styles['section-title']}>
              <span>Empower Your Influence:</span> Enhancing Decision-Making in
              AirDAO
            </h2>
            <Cards />
          </div>
        </div>
        <div className={styles.cta}>
          <div className="container">
            <h2 className={styles['page-title']}>
              Ready to begin your journey with AirDAO?
            </h2>
            <Button size="large" type="tetiary">
              Get started
            </Button>
          </div>
          <div className={styles.roundShadow} />
          <div className={styles.particle}>
            <ParticleIcon />
          </div>
        </div>
      </div>
      <Footer data={footerText.data} footerBlock={footerSlice} />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('banner');
  const footer = await client.getSingle('footer');
  return {
    props: {
      page,
      header,
      banner,
      footerText: footer,
    },
  };
}