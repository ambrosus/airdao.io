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
        <Image
          width={232}
          height={200}
          src={image.url}
          alt="rocket"
          className={styles['banner-rocket-image']}
        />
        <div className={styles['banner-text-button']}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => (
                <div className={styles['banner-text']}>{children}</div>
              ),
            }}
          />
          <PrismicNextLink field={buttonLink}>
            <PrismicRichText
              field={buttonName}
              components={{
                paragraph: ({ children }) => (
                  <Button
                    type="primary"
                    size="large"
                    className={styles['button']}
                  >
                    {children}
                  </Button>
                ),
              }}
            />
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default BannerRocket;
