import { Fragment } from 'react';
import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { PrismicRichText } from '@prismicio/react';
import styles from './buy-amb.module.scss';
import homepageStyles from '@/components/Homepage/homepage.module.scss';
import link from './link.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@airdao/ui-library';
import App from '@/components/Homepage/App';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';

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
              <Fragment key={el.image.url}>
                <Link
                  href={el.link.url || ''}
                  target={el.link.target || ''}
                  className={styles.exchange}
                >
                  <img src={el.image.url} alt="exchange" className={styles.exchange__img} />
                  <div className={styles.exchange__info}>
                    <PrismicRichText
                      field={el.name}
                      components={{
                        paragraph: ({ children }) => (
                          <p className={styles.exchange__title}>{children}</p>
                        ),
                      }}
                    />
                    <Image
                      src={link}
                      alt="link"
                      className={styles['exchange__link']}
                    />
                  </div>
                </Link>
              </Fragment>
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
