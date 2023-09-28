import styles from './semiblocks.module.scss';
import BlockLabel from '@/components/BlockLabel';
import { Button } from '@airdao/ui-library';
import discord from './discord.svg';
import linkedin from './linkedin.svg';
import medium from './medium.svg';
import reddit from './reddit.svg';
import telegram from './telegram.svg';
import x from './x.svg';
import youtube from './youtube.svg';
import Image from 'next/image';
import {PrismicRichText} from '@prismicio/react';

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
              <a href={props.governancePrimaryLink.url}>
                <Button type="primary" size="large">
                  {children}
                </Button>
              </a>
            ),
          }}
        />
        <PrismicRichText
          field={props.governanceSecondaryText}
          components={{
            paragraph: ({ children }) => (
              <a href={props.governanceSecondaryLink.url}>
                <Button className={styles['semiblocks__btn']} type="primary" size="large">
                  {children}
                </Button>
              </a>
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
            <a key={el.link.url} href={el.link.url}>
              <img src={el.image.url} alt="social" />
            </a>
          ))}
        </div>
        <PrismicRichText
          field={props.communityPrimaryText}
          components={{
            paragraph: ({ children }) => (
              <a href={props.communityPrimaryLink.url}>
                <Button
                  className={styles['semiblocks__btn']}
                  type="tetiary"
                  size="large"
                >
                  {children}
                </Button>
              </a>
            ),
          }}
        />
      </div>
    </div>
  </div>
);

export default Semiblocks;
