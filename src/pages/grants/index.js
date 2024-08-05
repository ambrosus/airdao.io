import { createClient } from '@/prismicio';

import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './grants.module.scss';
import Seo from '@/components/Seo';
import ContentBanner from './components/ContentBanner';
import Grants from './components/Grants';

export default function Landing({ page, grants, header, footerText }) {
  const { data } = page;
  return (
    <>
      <Seo
        title={grants.data.meta_title}
        description={grants.data.meta_description}
        image={grants.data.meta_image.url}
      />
      <div className={styles.container}>
        <HeaderWrapper header={header} showBanner={false} />
        <div className="container">
          <ContentBanner />
          <Grants />
        </div>
        <Footer
          data={footerText.data}
          footerBlock="footer_mobile_apps"
          additionalData={{
            bannerTitle: data.footer_banner_title,
            bannerDescription: data.footer_banner_description,
            googlePlay: data.google_play,
            appStore: data.app_store,
          }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepagenew');
  const grants = await client.getSingle('grants');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: {
      page,
      grants,
      header,
      footerText: footer,
    },
  };
}
