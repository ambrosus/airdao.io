import styles from './semiblocks.module.scss';
import BlockLabel from '@/components/BlockLabel';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron.svg';

const Semiblocks = (props) => (
  <div className={styles['semiblocks']}>
    <div className={styles['governance']}>
      <PrismicRichText
        field={props.governanceLabel}
        components={{
          paragraph: ({ children }) => (
            <BlockLabel className={styles['semiblocks__label']}>
              {children}
            </BlockLabel>
          ),
        }}
      />
      <PrismicRichText
        field={props.governanceTitle}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['semiblocks__title']}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={props.governanceText}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['semiblocks__text']}>{children}</p>
          ),
        }}
      />
      <div className={styles['governance__btns']}>
        <PrismicRichText
          field={props.governancePrimaryText}
          components={{
            paragraph: ({ children }) => (
              <Link href={props.governancePrimaryLink.url.replace('https://', '')}>
                <Button type="primary" size="large">
                  {children}
                </Button>
              </Link>
            ),
          }}
        />
        <PrismicRichText
          field={props.governanceSecondaryText}
          components={{
            paragraph: ({ children }) => (
              <Link href={props.governanceSecondaryLink.url}>
                <Button
                  className={styles['semiblocks__btn']}
                  type="primary"
                  size="large"
                >
                  {children}
                  <Image src={chevron} alt="chevron"/>
                </Button>
              </Link>
            ),
          }}
        />
      </div>
    </div>
    <div className={styles['community']}>
      <PrismicRichText
        field={props.communityLabel}
        components={{
          paragraph: ({ children }) => (
            <BlockLabel className={styles['semiblocks__label']}>
              {children}
            </BlockLabel>
          ),
        }}
      />
      <PrismicRichText
        field={props.communityTitle}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['semiblocks__title']}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={props.communityText}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['semiblocks__text']}>{children}</p>
          ),
        }}
      />
      <div className={styles['community__btns']}>
        <div className={styles['community__socials']}>
          {props.communitySocials.map((el) => (
            <Link key={el.link.url} href={el.link.url}>
              <img src={el.image.url} alt="social" />
            </Link>
          ))}
        </div>
        <PrismicRichText
          field={props.communityPrimaryText}
          components={{
            paragraph: ({ children }) => (
              <Link href={props.communityPrimaryLink.url.replace('https://', '')}>
                <Button
                  className={styles['semiblocks__btn']}
                  type="tetiary"
                  size="large"
                >
                  {children}
                  <Image src={chevron} alt="chevron"/>
                </Button>
              </Link>
            ),
          }}
        />
      </div>
    </div>
  </div>
);

export default Semiblocks;
