import styles from './community.module.scss';
import Image from 'next/image';
import chats from './chats.svg';
import chatsTablet from './chats-tablet.svg';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

const Community = ({
  text,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => {
  return (
    <div className={`container ${styles['community']}`}>
      <div className={styles['community__img-wrapper']}>
        <Image src={chats} alt="chats" className={styles['community__img']}/>
        <Image src={chatsTablet} alt="chats" className={`${styles['community__img']} ${styles['community__img_tablet']}`}/>
      </div>
      <div className={styles['community__right']}>
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['community__title']}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={primaryText}
          components={{
            paragraph: ({ children }) => (
              <Link
                href={primaryLink.url}
                target={primaryLink.target}
                className={styles['community__btn']}
              >
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
                target={secondaryLink.target}
              >
                <Button type="tetiary" size="large">
                  {children}
                </Button>
              </Link>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Community;
