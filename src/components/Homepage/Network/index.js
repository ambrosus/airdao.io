import styles from './network.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import amb from './amb.svg';
import { Button } from '@airdao/ui-library';
import {PrismicRichText} from '@prismicio/react';
import {asText} from '@prismicio/client';

const Network = ({ label, title, primaryLink, primaryText, info }) => (
  <div className={`container ${styles['network']}`}>
    <div>
      <PrismicRichText
        field={label}
        components={{
          paragraph: ({ children }) => (
            <BlockLabel>{children}</BlockLabel>
          ),
        }}
      />
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => (
            <p className={styles['network__title']}>{children}</p>
          ),
        }}
      />
      <div className={styles['network__list']}>
        {info.map((el) => (
          <div key={asText(el.label)}>
            <PrismicRichText
              field={el.info}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles['network-list__value']}>{children}</p>
                ),
              }}
            />
            <PrismicRichText
              field={el.label}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles['network-list__text']}>{children}</p>
                ),
              }}
            />
          </div>
        ))}
      </div>
      <PrismicRichText
        field={primaryText}
        components={{
          paragraph: ({ children }) => (
            <a href={primaryLink.url}>
              <Button size="large" type="primary">
                {children}
              </Button>
            </a>
          ),
        }}
      />
    </div>
    <Image src={amb} alt="amb" className={styles['network__img']} />
  </div>
);

export default Network;