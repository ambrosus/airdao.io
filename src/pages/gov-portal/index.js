import { useState } from 'react';
import styles from './landing.module.scss';
import { createClient } from '@/prismicio';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import CouncilBlock from '@/components/Landing/GovPortal/CouncilBlock';
import SbtBlock from 'src/components/Landing/GovPortal/SbtImg';
import SbtCta from '@/components/Landing/GovPortal/SbtCta';
import SbtInfo from '@/components/Landing/GovPortal/SbtInfo';
import HeroSection from '@/components/Landing/GovPortal/HeroSection';
import Seo from '@/components/Seo';

export default function Landing({ page, portal, header, banner, footerText }) {
  const { data } = page;
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <>
      <Seo
        title={portal.data.meta_title}
        description={portal.data.meta_description}
        image={portal.data.meta_image.url}
      />
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
