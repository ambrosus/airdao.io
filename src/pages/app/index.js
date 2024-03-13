import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from '@airdao/ui-library';
import { createClient } from '@/prismicio';
import Head from 'next/head';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
// import Steps from '@/components/Landing/Steps';
import styles from './app.module.scss';
// import Cards from '@/components/Landing/Cards';
// import ParticleIcon from '@/components/Icons/ParticleIcon';
import BannerApp from '@/components/App/BannerApp';
import DownloadApp from '@/components/App/DownloadApp';
import SliderApp from '@/components/App/SliderApp';

export default function App({ page, header, banner, footerText }) {
  const { data } = page;
  // const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <div className={styles.appPage}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og.png" />
        <meta name="twitter:image" content="https://airdao.io/og.png" />
      </Head>
      <HeaderWrapper header={header} showBanner={false} />
      <div className={styles.content}>
        <BannerApp data={footerText.data.downloadapp} />
        <SliderApp title="Explore app features" />
        <DownloadApp data={footerText.data.downloadapp} />
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
