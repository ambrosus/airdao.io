import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicRichText } from '@prismicio/react';
import styles from './blog.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';
import { getTimePassed } from '@/utils/getTimePassed';

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });

  const blog = await client.getByUID('blog', context.params.slug);

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const pages = await client.getByType('blog', {
    pageSize: 2,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.blog_type', 'governance')],
  });

  return {
    props: { blog, footerText: footer, header, pages },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType('blog');
  return {
    paths: pages.map((page) => `/blog/${page.uid}`),
    fallback: true, // false or "blocking"
  };
}

export default function BlogArticle({ blog, header, footerText, pages }) {
  if (!blog) {
    return null;
  }
  const { data } = blog;

  const renderBlogItem = (itemData) => {
    switch (itemData.slice_type) {
      case 'blog_subtitle':
        return <BlogSubtitle data={itemData} />;
      case 'blog_img':
        return <BlogImage data={itemData} />;
      case 'blog_text':
        return <BlogText data={itemData} />;
      case 'blog_wrapped_text':
        return <BlogWrappedText data={itemData} />;
    }
  };

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles['blog-page']}>
        <PrismicRichText
          field={data.title}
          components={{
            paragraph: ({ children }) => (
              <h1 className={styles['blog-page__title']}>{children}</h1>
            ),
          }}
        />
        <div className={styles['blog-page__info-wrapper']}>
          <span className={styles['blog-page__info']}>
            {getTimePassed(blog.last_publication_date)}
          </span>
          <PrismicRichText
            field={data.read_time}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['blog-page__info']}>{children}</span>
              ),
            }}
          />
          <PrismicRichText
            field={data.author}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['blog-page__info']}>{children}</span>
              ),
            }}
          />
        </div>
        <div>{data.slices.map((el) => renderBlogItem(el))}</div>
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
}

const BlogSubtitle = ({ data }) => (
  <PrismicRichText
    field={data.primary.blog_subtitle_text}
    components={{
      paragraph: ({ children }) => (
        <p className={styles['blog-page__subtitle']}>{children}</p>
      ),
    }}
  />
);

const BlogImage = ({ data }) => (
  <PrismicNextImage
    alt="blog img"
    field={data.primary.image}
    className={styles['blog-page__img']}
  />
);

const BlogText = ({ data }) => (
  <PrismicRichText
    field={data.items[0].text}
    components={{
      paragraph: ({ children }) => (
        <p className={styles['blog-page__text']}>{children}</p>
      ),
    }}
  />
);

const BlogWrappedText = ({ data }) => (
  <div className={styles['blog-page__text-wrapper']}>
    <PrismicRichText
      field={data.primary.blog_wrapped_text}
      components={{
        paragraph: ({ children }) => <p>{children}</p>,
      }}
    />
  </div>
);
