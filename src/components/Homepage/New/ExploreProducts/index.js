'use client';

import chevron from '@/assets/icons/chevron-blue.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import styles from './explore-products.module.scss';
import { useState } from 'react';

const products = [
  {
    name: 'Stake',
    description: 'Help secure the AirDAO network and earn AMB rewards',
    button: {
      name: 'Start staking',
      link: '#',
    },
    iconURL: '/img/homepage/staking.svg',
    video: 'Staking Video',
  },
  {
    name: 'Bridge',
    description:
      'Connect blockchain networks with the AirDAO Bridge. Transfer assets seamlessly across chains.',
    button: {
      name: 'Use bridge',
      link: '#',
    },
    iconURL: '/img/homepage/staking.svg',
    video: 'Bridge Video',
  },
  {
    name: 'KOSMOS',
    description: 'Earn passive income through dynamic bond offerings.',
    button: {
      name: 'Start earning',
      link: '#',
    },
    iconURL: '/img/homepage/staking.svg',
    video: 'KOSMOS Video',
  },
  {
    name: 'Network Explorer',
    description:
      'Track transactions and monitor network health with the AirDAO Network Explorer—transparent and open blockchain data.',
    button: {
      name: 'Explore network',
      link: '#',
    },
    iconURL: '/img/homepage/staking.svg',
    video: 'Explorer Video',
  },
];
// TODO: add texts from prismic
const ExploreProducts = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  return (
    <section className={`container ${styles['explore-products-container']}`}>
      <div className={styles['title']}>
        <div>Explore products</div>
        <h2>Bridge the financial gap and unlock new opportunities</h2>
      </div>
      <div className={styles['list-and-video']}>
        <div className={styles['list']}>
          {products.map(product => {
            const isCurrent = currentProduct.name === product.name;

            return (
              <div
                key={product.name}
                onClick={() => setCurrentProduct(product)}
                className={styles['list-item']}
              >
                <Image
                  src={product.iconURL}
                  alt={product.name}
                  width={40}
                  height={40}
                />
                <div className={styles['name-description']}>
                  <div className={styles['name']}>{product.name}</div>
                  {isCurrent && (
                    <div className={styles['description']}>
                      <div>{product.description}</div>
                      <Link href={product.button.link}>
                        <Button
                          type="primary"
                          size="large"
                          className={styles['button']}
                        >
                          {product.button.name}
                        </Button>
                      </Link>
                      <div className={styles['video']}>{product.video}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['video-container']}>{currentProduct.video}</div>
      </div>
      <div className={styles['list-mobile']}>
        <div className={styles['list']}>
          {products.map(product => (
            <div
              key={product.name}
              onClick={() => setCurrentProduct(product)}
              className={styles['list-item']}
            >
              <Image
                src={product.iconURL}
                alt={product.name}
                width={40}
                height={40}
              />
              <div className={styles['name-description']}>
                <div className={styles['name']}>{product.name}</div>
                <div className={styles['description']}>
                  <div>{product.description}</div>
                </div>
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
