import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

export default function ContactUsPage({ header, footerText }) {
  return (
    <>
      <HeaderWrapper header={header} />
      <ContactUs />
      <Footer
        slices={footerText.data.slices}
        mobileLink={footerText.data.footer_mobile_link_url}
        mobileLinkText={footerText.data.footer_mobile_link_text}
        mobileText={footerText.data.footer_mobile_text}
        socials={footerText.data.footer_social}
      />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  // const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { header, footerText: footer },
  };
}
