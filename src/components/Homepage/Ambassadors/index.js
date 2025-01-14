import styles from './ambassarods.module.scss';
import BlockLabel from '@/components/BlockLabel';
import chevron from '@/assets/icons/chevron.svg';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

const Ambassadors = ({
  label,
  title,
  text,
  images,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => (
  <div className={styles['ambassadors']}>
    <PrismicRichText
      field={label}
      components={{
        paragraph: ({ children }) => (
          <BlockLabel className={styles['ambassadors__label']}>
            {children}
          </BlockLabel>
        ),
      }}
    />
    <p className={styles['ambassadors__title']}>
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => <>{children}</>,
          strong: ({ children }) => <span>{children}</span>,
        }}
      />
    </p>
    <PrismicRichText
      field={text}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['ambassadors__text']}>{children}</p>
        ),
      }}
    />
    <div className={styles['ambassadors__list']}>
      {images &&
        images.map(el => (
          <img
            width={96}
            height={85}
            key={el.image.url}
            src={el.image.url}
            alt="ambassador"
          />
        ))}
    </div>
    <div className={styles['ambassadors__btns']}>
      <PrismicRichText
        field={primaryText}
        components={{
          paragraph: ({ children }) => (
            <Link href={primaryLink.url} target="_blank">
              <Button type="primary" size="large">
                {children}
              </Button>
            </Link>
          ),
        }}
      />
      <PrismicRichText
        field={secondaryText}
        components={{
          paragraph: ({ children }) => (
            <Link
              href={secondaryLink.url.replace('https://', '')}
              rel="nofollow"
            >
              <Button
                size="large"
                type="plain"
                className={styles['ambassadors__plain-btn']}
              >
                {children}
                <Image src={chevron} alt="chevron" />
              </Button>
            </Link>
          ),
        }}
      />
    </div>
  </div>
);

export default Ambassadors;
