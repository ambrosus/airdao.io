import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from './components/Hero';
import Roles from './components/Roles';
import Benefits from './components/Benefits';

const AmbassadorPage = ({ header, footerText }) => (
  <>
    {header && <HeaderWrapper header={header} />}
    <div style={{ overflow: 'auto' }}>
      <Hero />
      <Roles />
      <Benefits />
    </div>
    {footerText && (
      <Footer
        slices={footerText.data.slices}
        mobileLink={footerText.data.footer_mobile_link_url}
        mobileLinkText={footerText.data.footer_mobile_link_text}
        mobileText={footerText.data.footer_mobile_text}
        socials={footerText.data.footer_social}
      />
    )}
  </>
);

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: { header, footerText: footer },
  };
}
export default AmbassadorPage;
