import styles from './community.module.scss';
import Image from 'next/image';
import chats from './chats.png';
import { Button } from '@airdao/ui-library';
import {PrismicRichText} from '@prismicio/react';

const Community = ({
  text,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => {
  return (
    <div className={`container ${styles['community']}`}>
      <div className={styles['community__img']}>
        <Image src={chats} alt="chats" />
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
                <a href={primaryLink.url} className={styles['community__btn']}>
                  <Button type="primary" size="large">
                    {children}
                  </Button>
                </a>
            ),
          }}
        />
        <PrismicRichText
          field={secondaryText}
          components={{
            paragraph: ({ children }) => (
                <a href={secondaryLink.url}>
                  <Button type="tetiary" size="large">
                    {children}
                  </Button>
                </a>
            ),
          }}
        />
      </div>
    </div>
  )
};

export default Community;
