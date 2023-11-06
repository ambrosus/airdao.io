import Head from 'next/head';
import { isFilled, asLink } from '@prismicio/client';

import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import PolicyPage from '@/components/PolicyPage';

export default function Page({ page, header, footerText }) {
  return (
    <>
      {/*<Head>*/}
      {/*  <title>{page.data.meta_title}</title>*/}
      {/*  {isFilled.keyText(page.data.meta_description) ? (*/}
      {/*    <meta name="description" content={page.data.meta_description} />*/}
      {/*  ) : null}*/}
      {/*</Head>*/}
      {header && <HeaderWrapper header={header} />}
      {page && <PolicyPage page={page} />}
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('policy', params.uid);
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { page, header, footerText: footer },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('policy');

  return {
    paths: pages.map((page) => {
      return `/${page.uid}`;
    }),
    fallback: true,
  };
}
