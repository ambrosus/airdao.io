import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import styles from './hero.module.scss';

export default function Hero({ content }) {
  return (
    <div className={styles.container}>
      <PrismicNextImage
        field={content?.big_icon}
        alt=""
        className={styles.background}
      />
      <PrismicNextImage
        field={content?.small_icon}
        alt=""
        className={styles.background_mobile}
      />
      <PrismicRichText
        field={content?.title}
        alt=""
        components={{
          paragraph: ({ children }) => (
            <h1 className={styles.heading}>{children}</h1>
          ),
        }}
      />
    </div>
  );
}
