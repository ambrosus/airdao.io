import styles from './benefits.module.scss';
import { PrismicRichText } from '@prismicio/react';

const Benefits = ({ title, list }) =>
  title && (
    <div className={`container ${styles.benefits}`}>
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => (
            <h2 className={styles.benefits__title}>{children}</h2>
          ),
        }}
      />
      <div className={styles.benefits__list}>
        {list.map(el => (
          <div key={el.image.url} className={styles.benefits__item}>
            <img src={el.image.url} alt="benefit" />
            <PrismicRichText
              field={el.title}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles['benefits__item-title']}>{children}</p>
                ),
              }}
            />
            <PrismicRichText
              field={el.text}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles['benefits__item-text']}>{children}</p>
                ),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

export default Benefits;
