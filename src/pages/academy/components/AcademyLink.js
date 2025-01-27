import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../academy-list.module.scss';

const AcademyLink = ({ article, className }) => {
  return (
    article && (
      <motion.div
        layout
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
      >
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
      </motion.div>
    )
  );
};

export default AcademyLink;
