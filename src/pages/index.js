import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import Seo from '@/components/Seo';
import { useState } from 'react';
import styles from '@/components/Homepage/homepage.module.scss';
import MainBlock from '@/components/Homepage/MainBlock';
import BackedBy from '@/components/Homepage/BackedBy';
import BannerRocket from '@/components/Homepage/Banner';
import ExploreProducts from '@/components/Homepage/ExploreProducts';
import BeInvolved from '@/components/Homepage/BeInvolved';
import Mission from '@/components/Homepage/Mission';
import RoadmapBlogAcademy from '@/components/Homepage/RoadmapBlogAcademy';
import Network from '@/components/Homepage/Network';
import News from '@/components/Homepage/News';
import Events from '@/components/Homepage/Events';

export default function Home({
  page,
  header,
  banner,
  footerText,
  latestNewsArticles,
  latestEventsArticles,
}) {
  const { data } = page;
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  return (
    <div className={styles['homepage']}>
      <Seo
        title={page.data.meta_title}
        description={page.data.meta_description}
        image={page.data.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      <HeaderWrapper header={header} showBanner={showBanner} />
      <MainBlock
        title={data.title}
        description={data.subtitle}
        sections={data.sections}
      />
      <BackedBy title={data.backed_by_title} logos={data.logos} />
      <BannerRocket
        title={data.banner_title}
        buttonName={data.banner_button_name}
        buttonLink={data.banner_button_link}
      />
      <ExploreProducts
        smallTitle={data.product_small_title}
        title={data.product_title}
        list={data.products}
      />
      <BeInvolved
        smallTitle={data.involved_small_title}
        title={data.involved_title}
        main={data.involved_main}
        socials={data.involved_socials}
        sbt={data.involved_sbt}
        events={data.involved_events}
        ambassador={data.involved_ambassador}
        burn={data.involved_burn}
        ambassadors={data.ambassadors_images}
      />
      <Mission
        title={data.mission_title}
        description={data.mission_description}
        statistics={data.mission_statistic}
        buttonName={data.mission_button_name}
        buttonLink={data.statistic_button_link}
        images={data.mission_images}
      />
      <RoadmapBlogAcademy list={data.more_about_us_pages} />
      <Network
        smallTitle={data.network_small_title}
        title={data.network_title}
        list={data.network_items}
      />
      <News news={latestNewsArticles} />
      <Events events={latestEventsArticles} />
      <Footer
        data={footerText.data}
        footerBlock="footer_mobile_apps"
        additionalData={{
          bannerTitle: data.footer_banner_title,
          bannerDescription: data.footer_banner_description,
          googlePlay: data.google_play,
          appStore: data.app_store,
        }}
      />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const blogClient = prismic.createClient('airdao-blog');

  const page = await client.getSingle('homepagenew');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('banner');
  const footer = await client.getSingle('footer');

  const latestNewsArticles = await blogClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.blog_type', 'news')],
  });

  const latestEventsArticles = await blogClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.blog_type', 'events')],
  });

  return {
    props: {
      page,
      header,
      banner,
      footerText: footer,
      latestNewsArticles,
      latestEventsArticles,
    },
  };
}
