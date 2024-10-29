import Banner from '@/components/Banner';
import Colors from '@/components/BrandMaterials/Colors';
import Links from '@/components/BrandMaterials/Links';
import Logo from '@/components/BrandMaterials/Logo';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Seo from '@/components/Seo';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import { useState } from 'react';
import Hero from 'src/components/BrandMaterials/Hero';

const BrandMaterialsPage = ({ header, footerText, page, banner }) => {
  const footerSlice = getFooterBlockSlice(page.data);
  const [showBanner, setShowBanner] = useState(page?.data?.show_banner);
  return (
    <>
      <Seo
        title={page.data.meta_title}
        description={page.data.meta_description}
        image={page.data.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      {header && <HeaderWrapper header={header} showBanner={showBanner} />}
      <div style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <Hero content={page?.data?.header[0]} />
        <Logo content={page?.data} />
        <Colors content={page?.data} />
        <Links content={page?.data} />

        {footerText && (
          <Footer data={footerText.data} footerBlock={footerSlice} />
        )}
      </div>
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('brand_materials');
  return {
    props: { header, footerText: footer, page, banner },
  };
}

export default BrandMaterialsPage;
