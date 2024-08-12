'use client';

import { isBrowser, isMobile } from 'react-device-detect';
import chevron from '@/assets/icons/chevron-blue.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import styles from './explore-products.module.scss';
import { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';

let _window;

if (typeof window !== 'undefined') {
  _window = window;
}

const ExploreProducts = ({ smallTitle, title, list }) => {
  console.log({ isBrowser, isMobile });
  const [currentProduct, setCurrentProduct] = useState(list[0]);

  const router = useRouter();

  return (
    <section className={`container ${styles['explore-products-container']}`}>
      <div className={styles['title']}>
        <PrismicRichText
          field={smallTitle}
          components={{
            paragraph: ({ children }) => <div>{children}</div>,
          }}
        />
        <PrismicRichText
          field={title}
          components={{
            paragraph: ({ children }) => <h2>{children}</h2>,
          }}
        />
      </div>
      <div className={styles['list-and-video']}>
        <div className={styles['list']}>
          {list.map(product => {
            const isCurrent =
              currentProduct.product_name[0].text ===
              product.product_name[0].text;

            return (
              <div
                key={product.product_name[0].text}
                onMouseEnter={() => isBrowser && setCurrentProduct(product)}
                onClick={() => isMobile && setCurrentProduct(product)}
                className={styles['list-item']}
              >
                <Image
                  src={product.product_icon.url}
                  alt={product.name}
                  width={40}
                  height={40}
                />
                <div className={styles['name-description']}>
                  <div className={styles['name-wrapper']}>
                    <PrismicRichText
                      field={product.product_name}
                      components={{
                        paragraph: ({ children }) => (
                          <div className={styles['name']}>{children}</div>
                        ),
                      }}
                    />
                    {product.coming_soon && (
                      <div className={styles['coming-soon']}>Coming soon</div>
                    )}
                  </div>
                  {isCurrent && (
                    <div className={styles['description']}>
                      <PrismicRichText
                        field={product.product_description}
                        components={{
                          paragraph: ({ children }) => <div>{children}</div>,
                        }}
                      />
                      {!currentProduct.coming_soon && (
                        <Link href={product.product_button_link?.url || ''}>
                          <PrismicRichText
                            field={product.product_button_name}
                            components={{
                              paragraph: ({ children }) => (
                                <Button
                                  type="primary"
                                  size="large"
                                  className={styles['button']}
                                  disabled={!product.product_button_link?.url}
                                >
                                  {children}
                                </Button>
                              ),
                            }}
                          />
                        </Link>
                      )}
                      <div className={styles['video']}>
                        {_window &&
                          _window.innerWidth > 768 &&
                          currentProduct.product_video.url &&
                          !currentProduct.product_image.url && (
                            <video controls={false} autoPlay muted loop>
                              <source
                                src={product.product_video.url}
                                type="video/mp4"
                              />
                            </video>
                          )}
                        {currentProduct.product_image.url && (
                          <img
                            src={currentProduct.product_image.url}
                            alt={currentProduct.product_name[0].text}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['video-container']}>
          {_window &&
            _window.innerWidth > 768 &&
            currentProduct.product_video.url &&
            !currentProduct.product_image.url && (
              <video
                key={currentProduct.product_video.url}
                controls={false}
                autoPlay
                muted
                loop
                width={535}
              >
                <source
                  src={currentProduct.product_video.url}
                  type="video/mp4"
                />
              </video>
            )}
          {currentProduct.product_image.url && (
            <img
              src={currentProduct.product_image.url}
              alt={currentProduct.product_name[0].text}
            />
          )}
        </div>
      </div>
      <div className={styles['list-mobile']}>
        <div className={styles['list']}>
          {list.map(product => (
            <div
              key={product.product_name[0].text}
              onClick={() => {
                if (product.coming_soon) return;
                router.push(product.product_button_link?.url);
              }}
              className={styles['list-item']}
              disabled={!product.product_button_link?.url}
            >
              <Image
                src={product.product_icon.url}
                alt={product.name}
                width={40}
                height={40}
              />
              <div className={styles['name-description']}>
                <div className={styles['name-wrapper']}>
                  <PrismicRichText
                    field={product.product_name}
                    components={{
                      paragraph: ({ children }) => (
                        <div className={styles['name']}>{children}</div>
                      ),
                    }}
                  />
                  {product.coming_soon && (
                    <div className={styles['coming-soon']}>Coming soon</div>
                  )}
                </div>
                <PrismicRichText
                  field={product.product_description}
                  components={{
                    paragraph: ({ children }) => (
                      <div className={styles['description']}>
                        <div>{children}</div>
                      </div>
                    ),
                  }}
                />
              </div>
              {!product.coming_soon && (
                <Image src={chevron} alt="Continue Button" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
