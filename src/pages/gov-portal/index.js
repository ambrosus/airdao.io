import { useState } from 'react';
import styles from './landing.module.scss';
import Link from 'next/link';
import { Button } from '@airdao/ui-library';
import { createClient } from '@/prismicio';
import Head from 'next/head';
import HeaderWrapper from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import CouncilBlock from '@/components/Landing/GovPortal/CouncilBlock';
import SbtBlock from 'src/components/Landing/GovPortal/SbtImg';
import SbtCta from '@/components/Landing/GovPortal/SbtCta';
import SbtInfo from '@/components/Landing/GovPortal/SbtInfo';
import HeroSection from '@/components/Landing/GovPortal/HeroSection';

// TODO DELETE AFTER RELEASE IF NOT USED
// import Steps from '@/components/Landing/Steps';
// import Cards from '@/components/Landing/Cards';
// import ParticleIcon from '@/components/Icons/ParticleIcon';
// import BannerMap from '@/components/Landing/BannerMap';

export default function Landing({ page, header, banner, footerText }) {
  const { data } = page;
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <>
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
      <HeroSection />
      <div className={styles.container}>
        <SbtBlock />
        <SbtInfo />
        <CouncilBlock />
        <SbtCta />
      </div>
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
