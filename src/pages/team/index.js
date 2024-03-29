import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Ambassadors from '@/components/Homepage/Ambassadors';
import Marquee from '@/components/Marquee';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import Head from 'next/head';
import { useState } from 'react';
import Structure from 'src/components/Team/Structure';
import Team from 'src/components/Team/Team';
import TextBlock from 'src/components/Team/TextBlock';

const TeamPage = ({ header, footerText, page, banner }) => {
  const footerSlice = getFooterBlockSlice(page.data);
  const [showBanner, setShowBanner] = useState(page?.data?.show_banner);

  return (
    <>
      <Head>
        <meta property="og:image" content="https://airdao.io/og-team.png" />
        <meta name="twitter:image" content="https://airdao.io/og-team.png" />
      </Head>
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      {header && <HeaderWrapper header={header} showBanner={showBanner} />}
      <div className={'team-page'} style={{ overflow: 'auto' }}>
        <TextBlock
          story={page.data.story}
          illustration={page.data.illustration}
          mission={page.data.mission}
          vision={page.data.vision}
        />
        <Team
          heading={page.data.team_heading}
          council={page.data.council_and_operations}
          tech={page.data.tech}
          community={page.data.community}
        />
        <Marquee />
        <Structure
          heading={page.data.structure_heading}
          cards={page.data.structure_cards}
          text={page.data.structure_text}
        />
        <Ambassadors
          label={page.data.ambassadors_label}
          title={page.data.ambassadors_title}
          text={page.data.ambassadors_text}
          images={page.data.ambassadors_images}
          primaryText={page.data.ambassadors_primary_text}
          primaryLink={page.data.ambassadors_primary_link}
          secondaryText={page.data.ambassadors_secondary_text}
          secondaryLink={page.data.ambassadors_secondary_link}
        />
      </div>
      {footerText && (
        <Footer data={footerText.data} footerBlock={footerSlice} />
      )}
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('team');
  return {
    props: { header, footerText: footer, page, banner },
  };
}

export default TeamPage;
