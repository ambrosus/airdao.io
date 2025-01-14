'use client';
import swap from '@/assets/img/get-amb/astra-swap.svg';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { Button, Notify } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import arrow from './arrow.svg';
import styles from './buy-amb.module.scss';
import info from './info.svg';
import Seo from '@/components/Seo';

const options = [
  { title: 'AMB/USDT', value: 'usdt' },
  { title: 'AMB/BTC', value: 'btc' },
  { title: 'AMB/ETH', value: 'eth' },
];

const BuyAmb = ({ header, footerText, page, banner }) => {
  const [selectedFilter, setSelectedFilter] = useState('usdt');
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  const networksList = useMemo(() => page.networks_list, [page]);

  const exchangeList = useMemo(() => {
    return page.links.filter(el => el.trade === selectedFilter);
  }, [page, selectedFilter]);

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleCopy = (e, address) => {
    e.preventDefault();

    navigator.clipboard.writeText(address);
    Notify.info('Address copied', null, { autoClose: 1000 });
  };

  if (!showChild) return null;

  return (
    <>
      <Head>
        <meta property="og:image" content="https://airdao.io/og-get-amb.png" />
        <meta name="twitter:image" content="https://airdao.io/og-get-amb.png" />
      </Head>
      <Seo
        title={page.meta_title}
        description={page.meta_description}
        image={page.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      {header && <HeaderWrapper header={header} showBanner={showBanner} />}
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
          <div className={styles['banner-block']}>
            <div className={styles['banner-block__image-container']}>
              <Image src={swap} alt="swap" />
            </div>
            <div className={styles['banner-block__info']}>
              <PrismicRichText
                field={page.astra_label}
                components={{
                  paragraph: ({ children }) => (
                    <div className={styles['banner-block__info-label']}>
                      {children}
                    </div>
                  ),
                }}
              />
              <div className={styles['banner-block__info-title-description']}>
                <PrismicRichText
                  field={page.astra_title}
                  components={{
                    paragraph: ({ children }) => (
                      <div className={styles['banner-block__info-title']}>
                        {children}
                      </div>
                    ),
                  }}
                />
                <PrismicRichText
                  field={page.astra_description}
                  components={{
                    paragraph: ({ children }) => (
                      <div className={styles['banner-block__info-description']}>
                        {children}
                      </div>
                    ),
                  }}
                />
              </div>
              <PrismicRichText
                field={page.astra_button_name}
                components={{
                  paragraph: ({ children }) => (
                    <Button
                      type="primary"
                      size="large"
                      className={styles['button']}
                      onClick={() =>
                        window.open(page.astra_button_link.url, '_blank')
                      }
                    >
                      {children}
                    </Button>
                  ),
                }}
              />
            </div>
          </div>
          <div className={styles['exchange-filter']}>
            {options.map(el => (
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
            {exchangeList.map(el => (
              <Link
                key={el.link.url + el.trade}
                href={el.link.url || ''}
                target={el.link.target || ''}
                className={styles.exchange__container}
                rel="nofollow"
              >
                <div className={styles.exchange}>
                  <img
                    src={el.image?.url || ''}
                    alt="exchange"
                    className={styles.exchange__img}
                  />
                  <div className={styles.exchange__info}>
                    <div className={styles.exchange__info__container}>
                      <PrismicRichText
                        field={el.name}
                        components={{
                          paragraph: ({ children }) => (
                            <p className={styles.exchange__title}>{children}</p>
                          ),
                        }}
                      />
                      {el.label && (
                        <PrismicRichText
                          field={el.label}
                          components={{
                            paragraph: ({ children }) => (
                              <span className={styles.exchange__label}>
                                {children}
                              </span>
                            ),
                          }}
                        />
                      )}
                    </div>
                    <PrismicRichText
                      field={el?.type}
                      components={{
                        paragraph: ({ children }) => (
                          <p className={styles.exchange__type}>{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
                {el.button_link?.url && (
                  <div className={styles.exchange__scan_container}>
                    <Link
                      className={styles.exchange__scan}
                      key={el.button_link?.url}
                      href={el.button_link?.url || ''}
                      target={el.button_link?.target || ''}
                      rel="nofollow"
                    >
                      {el.button_icon?.url && (
                        <img
                          src={el.button_icon?.url || ''}
                          alt="button icon"
                          className={styles.exchange__scan_icon}
                        />
                      )}
                      <Image
                        src={arrow}
                        alt="arrow"
                        className={styles.exchange__arrow}
                      />
                    </Link>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
        {Boolean(networksList.length) && (
          <>
            <PrismicRichText
              field={page.networks_title}
              components={{
                paragraph: ({ children }) => (
                  <h2 className={styles.title}>{children}</h2>
                ),
              }}
            />
            <div className={`container ${styles.tokens}`}>
              {networksList.map(networkList => (
                <a
                  className={styles.token}
                  href={networkList.network_contract_address_link.url}
                  target="_blank"
                  key={networkList.network_contract_address.text}
                >
                  <img
                    src={networkList.network_logo.url}
                    className={styles.token__icon}
                    alt="bsc"
                  />
                  <p className={styles.token__name}>
                    <PrismicRichText
                      field={networkList.network_name}
                      components={{
                        paragraph: ({ children }) => <>{children}</>,
                      }}
                    />
                    <img src={info.src} className={styles.info} alt="info" />
                  </p>
                  <p className={styles.token__address}>
                    <PrismicRichText
                      field={page.token_contract_address_title}
                      components={{
                        paragraph: ({ children }) => <>{children}</>,
                      }}
                    />
                    <span
                      onClick={e =>
                        handleCopy(e, networkList.network_contract_address)
                      }
                    >
                      <PrismicRichText
                        field={networkList.network_contract_address}
                        components={{
                          paragraph: ({ children }) => <>{children}</>,
                        }}
                      />
                    </span>
                  </p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      {footerText && <Footer data={footerText.data} />}
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('buyamb');

  return {
    props: { header, footerText: footer, page: page.data, banner },
  };
}

export default BuyAmb;
