import React, { Fragment } from 'react';
import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { PrismicRichText } from '@prismicio/react';
import styles from './buy-amb.module.scss';
import homepageStyles from '@/components/Homepage/homepage.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button } from '@airdao/ui-library';
import App from '@/components/Homepage/App';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Head from 'next/head';

const options = [
  { title: 'AMB/USDT', value: 'usdt' },
  { title: 'AMB/BTC', value: 'btc' },
  { title: 'AMB/ETH', value: 'eth' },
];

const BuyAmb = ({ header, footerText, page }) => {
  const [selectedFilter, setSelectedFilter] = useState('usdt');

  const exchangeList = useMemo(() => {
    return page.links.filter((el) => el.trade === selectedFilter);
  }, [page, selectedFilter]);

  return (
    <>
      <Head>
        <meta property="og:image" content="https://airdao.io/og-get-amb.png" />
        <meta name="twitter:image" content="https://airdao.io/og-get-amb.png" />
      </Head>
      {header && <HeaderWrapper header={header} />}
      <div className={`${styles['buy-amb']}`}>
        <div className="container">
          <PrismicRichText
            field={page.title}
            components={{
              paragraph: ({ children }) => (
                <p className={styles['buy-amb__title']}>{children}</p>
              ),
            }}
          />
          <PrismicRichText
            field={page.subtitle}
            components={{
              paragraph: ({ children }) => (
                <p className={styles['buy-amb__subtitle']}>{children}</p>
              ),
            }}
          />
          <div className={styles['exchange-filter']}>
            {options.map((el) => (
              <Button
                key={el.title}
                size="medium"
                type="tetiary"
                className={
                  selectedFilter === el.value ? styles['selected-filter'] : ''
                }
                onClick={() => setSelectedFilter(el.value)}
              >
                {el.title}
              </Button>
            ))}
          </div>
          <div className={styles['buy-amb__list']}>
            {exchangeList.map((el, i) => (
              <Link
                key={el.link.url + el.trade}
                href={el.link.url || ''}
                target={el.link.target || ''}
                className={styles.exchange}
                rel="nofollow"
              >
                <img
                  src={el.image.url}
                  alt="exchange"
                  className={styles.exchange__img}
                />
                <div className={styles.exchange__info}>
                  <PrismicRichText
                    field={el.name}
                    components={{
                      paragraph: ({ children }) => (
                        <p className={styles.exchange__title}>{children}</p>
                      ),
                    }}
                  />
                  <svg className={styles['exchange__link']} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99968 2.75C6.99968 2.33579 7.33547 2 7.74968 2H13.2497C13.6639 2 13.9997 2.33579 13.9997 2.75V8.25C13.9997 8.66421 13.6639 9 13.2497 9C12.8355 9 12.4997 8.66421 12.4997 8.25V4.5607L3.28034 13.7803C2.98745 14.0732 2.51258 14.0732 2.21968 13.7803C1.92678 13.4874 1.92677 13.0126 2.21966 12.7197L11.4391 3.5H7.74968C7.33547 3.5 6.99968 3.16421 6.99968 2.75Z" fill="#A1A6B2"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Image
          className={`${homepageStyles['blue-circle']} ${homepageStyles['blue-circle_buy']}`}
          src={blueCircle}
          alt="blue circle"
        />
        <Image
          className={`${homepageStyles['orange-circle']} ${homepageStyles['orange-circle_buy']}`}
          src={orangeCircle}
          alt="orange circle"
        />
        <App
          title={page.app_title}
          list={page.app_list}
          appstore={page.app_appstore}
          google={page.app_google}
        />
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('buyamb');
  return {
    props: { header, footerText: footer, page: page.data },
  };
}

export default BuyAmb;
