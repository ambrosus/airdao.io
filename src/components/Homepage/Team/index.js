import styles from './team.module.scss';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

const Team = ({ title, primaryLink, primaryText, image }) => (
  <div className={styles['team']}>
    <div className={`container ${styles['team__wrapper']}`}>
      <div className={styles['team__left']}>
        <h3 className={styles['team__title']}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <>{children}</>,
              strong: ({ children }) => <span>{children}</span>,
            }}
          />
        </h3>
        <PrismicRichText
          field={primaryText}
          components={{
            paragraph: ({ children }) => (
              <Link href={primaryLink.url.replace('https://', '')} target={primaryLink.target}>
                <Button size="large" type="primary">
                  {children}
                </Button>
              </Link>
            ),
          }}
        />
      </div>
      <div className={styles['team__right']}>
        <img src={image.url} alt="team" className={styles['team__img']} />
      </div>
    </div>
  </div>
);

export default Team;
