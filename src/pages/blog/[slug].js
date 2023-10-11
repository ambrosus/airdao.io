import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicRichText } from '@prismicio/react';
import styles from './blog.module.scss';
import bottomBlockStyles from './blog-list.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import { getTimePassed } from '@/utils/getTimePassed';
import BlogLink from '@/pages/blog/components/BlogLink';
import Link from 'next/link';
import * as prismic from '@prismicio/client';

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });
  const newClient = prismic.createClient('airdao-blog');

  const blog = await newClient.getByUID('blog', context.params.slug);
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });
  return {
    props: { blog, footerText: footer, header, latestArticles },
  };
}

export async function getStaticPaths() {
  const client = prismic.createClient('airdao-blog');
  const pages = await client.getAllByType('blog');
  return {
    paths: pages.map((page) => `/blog/${page.uid}`),
    fallback: true,
  };
}

export default function BlogArticle({
  blog,
  header,
  footerText,
  latestArticles,
}) {
  if (!blog) {
    return null;
  }
  const { data } = blog;

  const renderBlogItem = (itemData) => {
    switch (itemData.slice_type) {
      case 'blog_subtitle':
        return <BlogSubtitle key={itemData.id} data={itemData} />;
      case 'blog_img':
        return <BlogImage key={itemData.id} data={itemData} />;
      case 'blog_text':
        return <BlogText key={itemData.id} data={itemData} />;
      case 'blog_wrapped_text':
        return <BlogWrappedText key={itemData.id} data={itemData} />;
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
                <span className={styles['blog-page__info']}>
                  {children} read
                </span>
              ),
            }}
          />
          <PrismicRichText
            field={data.author}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['blog-page__info']}>by {children}</span>
              ),
            }}
          />
          <span
            className={`${styles['blog-page__info']} ${styles['blog-page__info_type']}`}
          >
            {data.blog_type}
          </span>
        </div>
        <div>{data.slices.map((el) => renderBlogItem(el))}</div>
        <div className={bottomBlockStyles['articles-wrapper']}>
          <div className={bottomBlockStyles['articles-top-block']}>
            <h2 className={bottomBlockStyles['articles-title']}>
              More Articles
            </h2>
            <Link href="/blog" className={bottomBlockStyles['articles-btn']}>
              See all
            </Link>
          </div>
          <div className={bottomBlockStyles['articles-list']}>
            {latestArticles.map((article) => (
              <BlogLink key={article.uid} article={article} />
            ))}
          </div>
        </div>
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
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
    field={data.primary.text}
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
