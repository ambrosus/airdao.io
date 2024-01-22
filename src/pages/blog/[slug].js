import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import ShareButton from '@/components/ShareButton';
import GoBackIcon from '@/pages/academy/goBack.svg';
import BlogLink from '@/pages/blog/components/BlogLink';
import { createClient } from '@/prismicio';
import { getTimePassed } from '@/utils/getTimePassed';
import * as prismic from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import bottomBlockStyles from './blog-list.module.scss';
import styles from './blog.module.scss';

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });
  const blogClient = prismic.createClient('airdao-blog');

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  const blog = await blogClient.getByUID('blog', context.params.slug);
  const latestArticles = await blogClient.getAllByType('blog', {
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
    paths: pages.map(page => `/blog/${page.uid}`),
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

  const renderBlogItem = itemData => {
    console.log(itemData);
    switch (itemData.slice_type) {
      case 'blog_subtitle':
        return <BlogSubtitle key={itemData.id} data={itemData} />;
      case 'blog_img':
        return <BlogImage key={itemData.id} data={itemData} />;
      case 'blog_text':
        return <BlogText key={itemData.id} data={itemData} />;
      case 'blog_wrapped_text':
        return <BlogWrappedText key={itemData.id} data={itemData} />;
      case 'blog_text_title':
        return <BlogTextTitle key={itemData.id} data={itemData} />;
    }
  };

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles['blog-page']}>
        <Link href={'/blog'} className={styles.back}>
          <Image src={GoBackIcon} alt="go-back" className={styles.back__icon} />
          <p className={styles.back__text}>Blog</p>
        </Link>
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
          <Link
            href={`/blog#${data.blog_type}`}
            className={`${styles['blog-page__info']} ${styles['blog-page__info_type']}`}
          >
            {data.blog_type}
          </Link>
          <ShareButton />
        </div>
        <div>{data.slices.map(el => renderBlogItem(el))}</div>
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
            {latestArticles.map(article => (
              <BlogLink key={article.uid} article={article} />
            ))}
          </div>
        </div>
      </div>
      {footerText && <Footer data={footerText.data} />}
    </>
  );
}

const BlogTextTitle = ({ data }) => (
  <PrismicRichText
    field={data.primary.title}
    components={{
      heading3: ({ children }) => (
        <h3 className={styles['blog-page__text-title']}>{children}</h3>
      ),
    }}
  />
);

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
        paragraph: ({ children }) => (
          <p className={styles['blog-page__text-container']}>{children}</p>
        ),
      }}
    />
  </div>
);
