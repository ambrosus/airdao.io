import styles from './community.module.scss';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/client';

const Community = ({ heading, preText, text, socials }) => (
  <section className={styles['community-block']}>
    <div className={styles['community-block__left']}>
      <div className={styles['community-block__label']}>{preText}</div>
      <span className={styles['community-block__title']}>
        <PrismicRichText
          field={heading}
          components={{
            paragraph: ({ children }) => <p>{children}</p>,
            strong: ({ children }) => (
              <span className={styles['community-block__title-span']}>
                {children}
              </span>
            ),
          }}
        />
      </span>
      <p className={styles['community-block__text']}>{asText(text)}</p>
    </div>
    <div className={styles['community-block__right']}>
      {socials.map((el) => (
        <a
          target="_blank"
          href={el.link.url}
          key={el.name}
          className={styles['community-block-item']}
        >
          <div>
            <p className={styles['community-block-item__title']}>{el.name}</p>
            <p className={styles['community-block-item__text']}>
              {el.followers_amount_text}
            </p>
          </div>
          <Image src={el.img.url} width="48" height="48" alt={el.name} />
        </a>
      ))}
    </div>
  </section>
);

export default Community;
