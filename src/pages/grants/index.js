import { useState } from 'react';
import { createClient } from '@/prismicio';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './grants.module.scss';
import Seo from '@/components/Seo';
import ContentBanner from './components/ContentBanner';
import Grants from './components/Grants';

export default function GrantsPage({
  grants,
  header,
  page,
  banner,
  footerText,
}) {
  const [showBanner, setShowBanner] = useState(page?.data?.show_banner);

  return (
    <>
      <Seo
        title={grants.data.meta_title}
        description={grants.data.meta_description}
        image={grants.data.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      <div className={styles.container}>
        <HeaderWrapper header={header} showBanner={false} />
        <ContentBanner
          heading={grants.data.heading}
          text={grants.data.text}
          email={grants.data.email}
        />
        <Grants
          cards={grants.data.cards}
          cta={grants.data.cta_text}
          email={grants.data.email}
        />
        <Footer data={footerText.data} className={styles['grants__footer']} />
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const grants = await client.getSingle('grants');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('team');
  return {
    props: {
      grants,
      header,
      page,
      banner,
      footerText: footer,
    },
  };
}
