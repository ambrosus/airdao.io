import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import App from '@/components/Homepage/App';
import homepageStyles from '@/components/Homepage/homepage.module.scss';
import { createClient } from '@/prismicio';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import arrow from './arrow.svg';
import styles from './buy-amb.module.scss';
import Seo from '@/components/Seo';

const options = [
  { title: 'AMB/USDT', value: 'usdt' },
  { title: 'AMB/BTC', value: 'btc' },
  { title: 'AMB/ETH', value: 'eth' },
];

const BuyAmb = ({ header, footerText, page, banner }) => {
  const [selectedFilter, setSelectedFilter] = useState('usdt');
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  const exchangeList = useMemo(() => {
    return page.links.filter(el => el.trade === selectedFilter);
  }, [page, selectedFilter]);

  // client side rendering because of nested links
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
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
            {exchangeList.map((el, i) => (
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
                      <Image
                        src={arrow}
                        alt="arrow"
                        className={styles.exchange__arrow}
                      />
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
                      <PrismicRichText
                        field={el.button_name}
                        components={{
                          paragraph: ({ children }) => (
                            <p className={styles.exchange__scan__text}>
                              {children}
                            </p>
                          ),
                        }}
                      />
                      {el.button_icon?.url && (
                        <img
                          src={el.button_icon?.url || ''}
                          alt=""
                          className={styles.exchange__scan_icon}
                        />
                      )}
                    </Link>
                  </div>
                )}
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
      {footerText && <Footer data={footerText.data} />}
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
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
