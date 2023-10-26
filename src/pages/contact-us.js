import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import styles from '@/components/ContactUs/contact-us.module.scss';

export default function ContactUsPage({ header, footerText, page }) {
  const footerSlice = getFooterBlockSlice(page);

  return (
    <>
      <HeaderWrapper header={header} />
      <ContactUs page={page} />
      <Footer
        className={styles.footer}
        slices={footerText.data.slices}
        socials={footerText.data.footer_social}
        footerBlock={footerSlice}
      />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('contact_us');

  return {
    props: { header, footerText: footer, page: page.data },
  };
}
