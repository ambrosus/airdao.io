import styles from '../blog-list.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { getTimePassed } from '@/utils/getTimePassed';
import Link from 'next/link';

const BlogLink = ({ article, className }) => {
  return (
    article && (
      <Link
        href={article ? `/blog/${article.uid}` : '/'}
        className={`${styles['blog-link']} ${className}`}
      >
        <img
          src={article.data.article_link_img.url || '/article.png'}
          alt={'article image'}
          className={styles['blog-link__img']}
        />
        <PrismicRichText
          field={article.data.title}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['blog-link__title']}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={article.data.description}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['blog-link__descr']}>{children}</p>
            ),
          }}
        />
        <div>
          <span className={styles['blog-link__info']}>
            {getTimePassed(article.last_publication_date)}
          </span>
          <span className={styles['blog-link__info']}>
            {article.data.blog_type}
          </span>
          <PrismicRichText
            field={article.data.read_time}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['blog-link__info']}>{children} read</span>
              ),
            }}
          />
        </div>
      </Link>
    )
  );
};

export default BlogLink;
