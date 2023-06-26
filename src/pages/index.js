import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Banner from '@/components/Homepage/Banner';
import Hero from '@/components/Homepage/Hero';
import Announcement from '@/components/Homepage/Announcement';
import Community from '@/components/Homepage/Community';
import Governance from '@/components/Homepage/Governance';

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
      <Governance />
      <Community />
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
