import styles from './mission.module.scss';
import BlockLabel from '@/components/BlockLabel';
import { PrismicRichText } from '@prismicio/react';

const Mission = ({ label, title, text }) => (
  <div className={styles['mission']}>
    <div className="container">
      <PrismicRichText
        field={label}
        components={{
          paragraph: ({ children }) => (
            <BlockLabel className={styles['mission__label']}>
              {children}
            </BlockLabel>
          ),
        }}
      />
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => (
            <h3 className={styles['mission__title']}>{children}</h3>
          ),
        }}
      />
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['mission__text']}>{children}</p>
          ),
        }}
      />
    </div>
  </div>
);

export default Mission;
