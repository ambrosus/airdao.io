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
import Footer from "@/components/Footer";

export default function Home({ page, header }) {
  const { data } = page;

  return (
    <>
      <Banner data={data.top_bar_announcement} />
      <HeaderWrapper header={header} />
      <Hero heading={data.title_heading} text={data.title_text} />
      <Announcement
        heading={data.mobile_heading}
        text={data.mobile_text}
        buttonText={data.mobile_button_text}
        buttonLink={data.mobile_button_link}
      />
      <Products text={data.products_text} cards={data.products_cards} />
      <Trade
        preText={data.trade_pre_text}
        heading={data.trade_heading}
        text={data.trade_text}
        cards={data.slices3}
      />
      <Network />
      <Ambassadors />
      <Governance />
      <Community />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');

  return {
    props: { page, header },
  };
}
