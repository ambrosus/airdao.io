import Banner from '@/components/Banner';
import ContactUs from '@/components/ContactUs';
import styles from '@/components/ContactUs/contact-us.module.scss';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import { useState } from 'react';

export default function ContactUsPage({ header, footerText, page, banner }) {
  const footerSlice = getFooterBlockSlice(page);
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  return (
    <>
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      <HeaderWrapper header={header} showBanner={showBanner} />
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
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('contact_us');

  return {
    props: { header, footerText: footer, page: page.data, banner },
  };
}
