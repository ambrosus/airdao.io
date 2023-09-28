import styles from './articles-list.module.scss';
import BlogLink from '@/pages/blog/components/BlogLink';

const ArticlesList = ({
  title = '',
  subtitle = '',
  goToText = '',
  goToLink = '',
  articles = [],
  className = '',
}) => (
  <div className={`container articles ${className}`}>
    <div className={styles['articles__heading']}>
      <div>
        <p className={styles['articles__title']}>{title}</p>
        <p className={styles['articles__subtitle']}>{subtitle}</p>
      </div>
      <a href={goToLink} className={styles['articles__link']}>
        {goToText}
      </a>
    </div>
    <div className={styles['articles__list-wrapper']}>
      <div className={styles['articles__list']}>
        {articles.map((el) => (
          <BlogLink
            key={el.uid}
            article={el}
            className={styles['blog-link_home']}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ArticlesList;
