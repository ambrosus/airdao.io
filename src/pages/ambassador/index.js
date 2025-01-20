// import blueCircle from '@/assets/img/blue-circle.svg';
// import orangeCircle from '@/assets/img/orange-circle.svg';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import homeStyles from '@/components/Homepage/homepage.module.scss';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
// import Image from 'next/image';
import { useState } from 'react';
import styles from './ambassador.module.scss';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Roles from './components/Roles';
import Seo from '@/components/Seo';

const AmbassadorPage = ({ header, footerText, page, banner }) => {
  const footerSlice = getFooterBlockSlice(page);
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  return (
    page && (
      <div className={styles.ambassador}>
        <Seo
          title={page.meta_title}
          description={page.meta_description}
          image={page.meta_image.url}
        />
        {showBanner && (
          <Banner data={banner?.data} setShowBanner={setShowBanner} />
        )}
        {header && <HeaderWrapper header={header} showBanner={showBanner} />}
        <Hero
          title={page.hero_title}
          text={page.hero_text}
          image={page.hero_image}
          primaryLink={page.hero_primary_link}
          primaryText={page.hero_primary_text}
        />
        <Roles
          title={page.roles_title}
          list={page.roles_list}
          text={page.roles_text}
          primaryText={page.roles_primary_text}
          primaryLink={page.roles_primary_link}
        />
        <div className={homeStyles['articles-wrapper']}>
          {/*<Image*/}
          {/*  className={homeStyles['blue-circle']}*/}
          {/*  src={blueCircle}*/}
          {/*  alt="blue circle"*/}
          {/*/>*/}
          {/*<Image*/}
          {/*  className={homeStyles['orange-circle']}*/}
          {/*  src={orangeCircle}*/}
          {/*  alt="orange circle"*/}
          {/*/>*/}
          <Benefits title={page.benefits_title} list={page.benefits_list} />
        </div>
        {footerText && (
          <Footer footerBlock={footerSlice} data={footerText.data} />
        )}
      </div>
    )
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('ambassador');
  return {
    props: { header, footerText: footer, page: page.data, banner },
  };
}
export default AmbassadorPage;
