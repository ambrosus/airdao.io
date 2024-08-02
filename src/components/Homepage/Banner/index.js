import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import rocket from '@/assets/img/homepage/rocket.svg';
import styles from './banner-rocket.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

const BannerRocket = ({ title, buttonName, buttonLink }) => {
  return (
    <section className="container">
      <div className={styles['banner-rocket-container']}>
        <Image src={rocket} alt="rocket" />
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
