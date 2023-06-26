import styles from './announcement.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';
import deviceImage from './device.png';

export default function Announcement({
  heading,
  text,
  buttonText,
  buttonLink,
}) {
  return (
    <section className={styles.announcement}>
      <div className={styles.announcement__textBlock}>
        <PrismicRichText
          field={heading}
          components={{
            heading2: ({ children }) => (
              <h2 className={styles.announcement__heading}>{children}</h2>
            ),
            strong: ({ children }) => (
              <span className={styles.announcement__heading_white}>
                {children}
              </span>
            ),
          }}
        />
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.announcement__text}>{children}</p>
            ),
          }}
        />
        <PrismicNextLink
          className={styles.announcement__button}
          field={buttonLink}
        >
          {buttonText}
        </PrismicNextLink>
      </div>
      <Image src={deviceImage} alt={'device-image'} />
    </section>
  );
}
