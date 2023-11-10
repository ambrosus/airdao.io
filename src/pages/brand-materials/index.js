import Colors from '@/components/BrandMaterials/Colors';
import Links from '@/components/BrandMaterials/Links';
import Logo from '@/components/BrandMaterials/Logo';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import Hero from 'src/components/BrandMaterials/Hero';

const BrandMaterialsPage = ({ header, footerText, page, latestArticles }) => {
  const footerSlice = getFooterBlockSlice(page.data);
  const heading = page?.data?.heading;
  heading[0].text = 'Brand materials';
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://airdao.io/og-governance.png"
        />
        <meta
          name="twitter:image"
          content="https://airdao.io/og-governance.png"
        />
      </Head>
      {header && <HeaderWrapper header={header} />}
      <div style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <Hero heading={heading} />
        <Logo />
        <Colors />
        <Links />

        {footerText && (
          <Footer
            slices={footerText.data.slices}
            socials={footerText.data.footer_social}
            footerBlock={footerSlice}
          />
        )}
      </div>
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const newClient = prismic.createClient('airdao-blog');

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('governance');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: { header, footerText: footer, page, latestArticles },
  };
}

export default BrandMaterialsPage;
