'use client';

import chevron from '@/assets/icons/chevron-blue.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import styles from './explore-products.module.scss';
import { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';

const ExploreProducts = ({ smallTitle, title, list }) => {
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
                onClick={() => setCurrentProduct(product)}
                className={styles['list-item']}
              >
                <Image
                  src={product.product_icon.url}
                  alt={product.name}
                  width={40}
                  height={40}
                />
                <div className={styles['name-description']}>
                  <PrismicRichText
                    field={product.product_name}
                    components={{
                      paragraph: ({ children }) => (
                        <div className={styles['name']}>{children}</div>
                      ),
                    }}
                  />
                  {isCurrent && (
                    <div className={styles['description']}>
                      <PrismicRichText
                        field={product.product_description}
                        components={{
                          paragraph: ({ children }) => <div>{children}</div>,
                        }}
                      />
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
                      <div className={styles['video']}>
                        <video controls={false} autoPlay muted>
                          <source
                            src={product.product_video.url}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['video-container']}>
          {currentProduct.product_video.url && (
            <video
              key={currentProduct.product_video.url}
              controls={false}
              autoPlay
              muted
              width={535}
            >
              <source src={currentProduct.product_video.url} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className={styles['list-mobile']}>
        <div className={styles['list']}>
          {list.map(product => (
            <div
              key={product.product_name[0].text}
              onClick={() => router.push(product.product_button_link?.url)}
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
                <PrismicRichText
                  field={product.product_name}
                  components={{
                    paragraph: ({ children }) => (
                      <div className={styles['name']}>{children}</div>
                    ),
                  }}
                />
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
              <Image src={chevron} alt="Continue Button" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
