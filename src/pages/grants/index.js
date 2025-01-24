import { createClient } from '@/prismicio';

import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './grants.module.scss';
import Seo from '@/components/Seo';
import Grants from './components/Grants';

export default function GrantsPage({ grants, header, footerText }) {
  return (
    <>
      <Seo
        title={grants.data.meta_title}
        description={grants.data.meta_description}
        image={grants.data.meta_image.url}
      />
      <HeaderWrapper header={header} showBanner={false} />
      <Grants email={grants.data.email} />
      <Footer data={footerText.data} className={styles['grants__footer']} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const grants = await client.getSingle('grants');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: {
      grants,
      header,
      footerText: footer,
    },
  };
}
