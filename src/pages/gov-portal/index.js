import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@airdao/ui-library';
import { createClient } from '@/prismicio';
import Head from 'next/head';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Steps from '@/components/Landing/Steps';
import styles from './landing.module.scss';
import Cards from '@/components/Landing/Cards';
import ParticleIcon from '@/components/Icons/ParticleIcon';
import BannerMap from '@/components/Landing/BannerMap';

export default function Landing({ page, header, banner, footerText }) {
  const { data } = page;
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <div className={styles.govPortalPage}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og.png" />
        <meta name="twitter:image" content="https://airdao.io/og.png" />
      </Head>
      {showBanner && (
        <Banner
          data={banner?.data}
          setShowBanner={setShowBanner}
          nextLink={false}
        />
      )}
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
            <div className={styles.ctaButtons}>
              <Link href="https://airdao.io/gov-portal/connect-wallet">
                <Button size="large" type="tetiary">
                  Join AirDAO
                </Button>
              </Link>
              <Link target="_blank" href="https://t.me/+z0x9kmmP9q5kMzcy">
                <Button size="large" type="primary">
                  Get support
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.roundShadow} />
          <div className={styles.particle}>
            <ParticleIcon />
          </div>
        </div>
      </div>
      <Footer data={footerText.data} footerBlock={''} />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('govBanner');
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
