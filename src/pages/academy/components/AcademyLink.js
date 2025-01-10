import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import styles from '../academy-list.module.scss';

const AcademyLink = ({ article, className }) => {
  return (
    article && (
      <Link
        href={article ? `/academy/${article.uid}` : '/'}
        className={`${styles['academy-link']} ${className}`}
      >
        <img
          src={article.data.article_link_img.url || '/article.png'}
          alt="article image"
          className={styles['academy-link__img']}
        />
        <PrismicRichText
          field={article.data.title}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['academy-link__title']}>{children}</p>
            ),
          }}
        />
        <div>
          <PrismicRichText
            field={article.data.read_time}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['academy-link__info']}>
                  {children} read
                </span>
              ),
            }}
          />
        </div>
      </Link>
    )
  );
};

export default AcademyLink;
