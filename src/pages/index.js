import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Banner from '@/components/Homepage/Banner';
import Hero from '@/components/Homepage/Hero';
import Announcement from '@/components/Homepage/Announcement';
import Products from '@/components/Homepage/Products';
import Community from '@/components/Homepage/Community';
import Governance from '@/components/Homepage/Governance';
import Ambassadors from '@/components/Homepage/Ambassadors';
import Network from '@/components/Homepage/Network';
import Trade from '@/components/Homepage/Trade';
import Footer from '@/components/Footer';

export default function Home({ page, header, footerText }) {
  const { data } = page;
  return (
    <>
      <Banner data={data.top_bar_announcement} />
      <HeaderWrapper header={header} />
      <Hero heading={data.title_heading} text={data.title_text} />
      {/*<Announcement*/}
      {/*  heading={data.mobile_heading}*/}
      {/*  text={data.mobile_text}*/}
      {/*  buttonText={data.mobile_button_text}*/}
      {/*  buttonLink={data.mobile_button_link}*/}
      {/*/>*/}
      <Products text={data.products_text} cards={data.products_cards} />
      <Trade
        preText={data.trade_pre_text}
        heading={data.trade_heading}
        text={data.trade_text}
        cards={data.slices3}
      />
      <Network
        preText={data.stats_pre_text}
        heading={data.stats_heading}
        text={data.stats_text}
        order={data.stats_order}
        buttonText={data.stats_button_text}
        buttonLink={data.stats_button_link}
      />
      <Ambassadors
        preText={data.ambassadors_pre_text}
        heading={data.ambassadors_heading}
        actionButtonText={data.ambassadors_action_button_text}
        actionButtonLink={data.ambassadors_action_button_link}
        learnButtonText={data.ambassadors_learn_button_text}
        learnButtonLink={data.ambassadors_learn_button_link}
      />
      <Governance
        preText={data.governance_pre_text}
        heading={data.governance_heading}
        text={data.governance_text}
        actionButtonText={data.governance_action_button_text}
        actionButtonLink={data.governance_action_button_link}
        learnButtonText={data.governance_learn_button_text}
        learnButtonLink={data.governance_learn_button_link}
      />
      <Community
        heading={data.community_heading}
        preText={data.community_pre_text}
        socials={data.community_socials_cards}
        text={data.community_text}
      />
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

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { page, header, footerText: footer },
  };
}
