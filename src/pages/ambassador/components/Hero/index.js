import styles from './hero.module.scss';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';

const Hero = ({ title, text, primaryLink, primaryText, image }) =>
  title && (
    <div className={`container ${styles.hero}`}>
      <div className={styles.hero__left}>
        <PrismicRichText
          field={title}
          components={{
            paragraph: ({ children }) => (
              <h1 className={styles.hero__title}>{children}</h1>
            ),
          }}
        />
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.hero__text}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={primaryText}
          components={{
            paragraph: ({ children }) => (
              <a href={primaryLink.url} className={styles.hero__btn}>
                <Button type="secondary" size="large">
                  {children}
                </Button>
              </a>
            ),
          }}
        />
      </div>
      <img src={image.url} alt="ambassadors" className={styles.hero__img} />
    </div>
  );

export default Hero;
