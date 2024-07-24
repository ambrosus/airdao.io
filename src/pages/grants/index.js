import { useState } from 'react';
import { createClient } from '@/prismicio';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './grants.module.scss';
import Seo from '@/components/Seo';
import ContentBanner from './components/ContentBanner';
import Grants from './components/Grants';

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
      <div
        className={`${styles.container} ${showBanner ? styles.hasBanner : ''}`}
      >
        <HeaderWrapper header={header} showBanner={showBanner} />
        <div className="container">
          <ContentBanner />
          <Grants />
        </div>
        <Footer data={footerText.data} footerBlock={''} />
      </div>
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
