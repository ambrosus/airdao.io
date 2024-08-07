import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import ShareButton from '@/components/ShareButton';
import AcademyLink from '@/pages/academy/components/AcademyLink';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import { default as bottomBlockStyles } from './academy-list.module.scss';
import styles from './academy.module.scss';
import blogStyles from '../blog/blog.module.scss';
import GoBackIcon from './goBack.svg';
import CustomSeo from '@/components/CustomSeo';

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });
  const newClient = prismic.createClient('airdao-academy');

  const academy = await newClient.getByUID('academy', context.params.slug);
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const latestAcademyArticles = await newClient.getAllByType('academy', {
    limit: 3,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
  });
  return {
    props: { academy, footerText: footer, header, latestAcademyArticles },
  };
}

export async function getStaticPaths() {
  const client = prismic.createClient('airdao-academy');
  const pages = await client.getAllByType('academy');
  return {
    paths: pages.map(page => `/academy/${page.uid}`),
    fallback: true,
  };
}

export default function AcademyArticle({
  academy,
  header,
  footerText,
  latestAcademyArticles,
}) {
  if (!academy) {
    return null;
  }
  const { data } = academy;

  const renderBlogItem = itemData => {
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
      case 'numeric_list':
        return <NumericList key={itemData.id} data={itemData} />;
    }
  };

  return (
    <>
      <CustomSeo siteName="AirDAO Academy" data={data} />
      {header && <HeaderWrapper header={header} />}
      <div className={styles['academy-page']}>
        <Link href={'/academy'} className={styles['academy-back']}>
          <Image
            src={GoBackIcon}
            alt="go-back"
            className={styles['academy-back-icon']}
          />
          <p className={styles['academy-back-text']}>Academy</p>
        </Link>
        <PrismicRichText
          field={data.title}
          components={{
            paragraph: ({ children }) => (
              <h1 className={styles['academy-page__title']}>{children}</h1>
            ),
          }}
        />
        <div className={styles['academy-page__info-wrapper']}>
          <PrismicRichText
            field={data.read_time}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['academy-page__info']}>
                  {children} read
                </span>
              ),
            }}
          />
          <ShareButton />
        </div>
        <div>{data.slices.map(el => renderBlogItem(el))}</div>
        <div className={bottomBlockStyles['articles-wrapper']}>
          <div className={bottomBlockStyles['articles-top-block']}>
            <h2 className={bottomBlockStyles['articles-title']}>
              Related articles
            </h2>
            <Link
              href="/src/pages/#academy"
              className={bottomBlockStyles['articles-btn']}
            >
              See all
            </Link>
          </div>
          <div className={bottomBlockStyles['articles-list']}>
            {latestAcademyArticles.map(article => (
              <AcademyLink key={article.uid} article={article} />
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
        <h3 className={styles['academy-page__text-title']}>{children}</h3>
      ),
    }}
  />
);
const BlogSubtitle = ({ data }) => (
  <PrismicRichText
    field={data.primary.blog_subtitle_text}
    components={{
      paragraph: ({ children }) => (
        <p className={styles['academy-page__subtitle']}>{children}</p>
      ),
    }}
  />
);

const BlogImage = ({ data }) => (
  <PrismicNextImage
    alt="academy img"
    field={data.primary.image}
    className={styles['academy-page__img']}
  />
);

const NumericList = ({ data }) => {
  return (
    <div>
      {data.items.map((el, i) => (
        <div className={blogStyles['blog-page__custom-numbered-list']} key={i}>
          <div className={blogStyles['blog-page__custom-number']}>
            <PrismicRichText
              field={el.number}
              components={{
                paragraph: ({ children }) => (
                  <p className={blogStyles['blog-page__text']}>{children}</p>
                ),
              }}
            />
          </div>
          <div>
            <PrismicRichText
              field={el.text}
              components={{
                paragraph: ({ children }) => (
                  <p className={blogStyles['blog-page__text']}>{children}</p>
                ),
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const BlogText = ({ data }) => (
  <PrismicRichText
    field={data.primary.text}
    components={{
      paragraph: ({ children }) => (
        <p className={blogStyles['blog-page__text']}>{children}</p>
      ),
      list: ({ children }) => (
        <ul className={blogStyles['blog__ul']}>{children}</ul>
      ),
      listItem: ({ children }) => (
        <li className={blogStyles['blog__list-item']}>{children}</li>
      ),
      oList: ({ children }) => (
        <ol className={blogStyles['blog__ol']}>{children}</ol>
      ),
      oListItem: ({ children }) => (
        <li className={blogStyles['blog__list-item']}>{children}</li>
      ),
      heading6: ({ children }) => (
        <p className={blogStyles['blog__p-m0']}>{children}</p>
      ),
    }}
  />
);

const BlogWrappedText = ({ data }) => (
  <div className={styles['academy-page__text-wrapper']}>
    <PrismicRichText
      field={data.primary.blog_wrapped_text}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['academy-page__text-container']}>{children}</p>
        ),
      }}
    />
  </div>
);
