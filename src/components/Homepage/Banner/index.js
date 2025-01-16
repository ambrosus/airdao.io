import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import styles from './banner-rocket.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

const BannerRocket = ({ title, buttonName, buttonLink, image, bgUrl }) => {
  return (
    <section className="container">
      <div
        className={styles['banner-rocket-container']}
        style={{ backgroundImage: `url(${bgUrl.url})` }}
      >
        <div className={styles['banner-inner']}>
          <div className={styles['banner-image']}>
            <Image width={232} height={210} src={image.url} alt="rocket" />
          </div>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => (
                <div className={styles['banner-message']}>{children}</div>
              ),
            }}
          />
          <div className={styles['banner-button']}>
            <PrismicNextLink field={buttonLink}>
              <PrismicRichText
                field={buttonName}
                components={{
                  paragraph: ({ children }) => (
                    <Button type="primary" size="large">
                      {children}
                    </Button>
                  ),
                }}
              />
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerRocket;
