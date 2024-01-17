import Colors from '@/components/BrandMaterials/Colors';
import Links from '@/components/BrandMaterials/Links';
import Logo from '@/components/BrandMaterials/Logo';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import Hero from 'src/components/BrandMaterials/Hero';

const BrandMaterialsPage = ({ header, footerText, page }) => {
  const footerSlice = getFooterBlockSlice(page.data);
  return (
    <>
      {header && <HeaderWrapper header={header} />}
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
  const page = await client.getSingle('brand_materials');
  return {
    props: { header, footerText: footer, page },
  };
}

export default BrandMaterialsPage;
