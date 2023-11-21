import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicRichText } from '@prismicio/react';
import { useState } from 'react';
import styles from './roadmap.module.scss';
import Post from '@/pages/roadmap/components/Post';
import { asText } from '@prismicio/client';
import Slider from 'react-slick';
import { Button } from '@airdao/ui-library';
import hero from './hero.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import chevron from '@/assets/icons/chevron.svg';

const filters = [
  { labelKey: 'other_label', key: 'other' },
  { labelKey: 'explorer_label', key: 'explorer' },
  { labelKey: 'apollo_label', key: 'apollo' },
  { labelKey: 'multisig_label', key: 'multisig' },
  { labelKey: 'soon_label', key: 'soon' },
];

const settings = {
  dots: true,
  infinite: true,
  useTransform: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
        fill="#212121"
      />
    </svg>
  ),
  prevArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
        fill="#212121"
      />
    </svg>
  ),
};

const convertDate = (date) => {
  const dateFuture = new Date(date);
  const dateNow = new Date();

  let seconds = Math.floor((dateFuture - dateNow) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  return `${days}d ${hours}h ${minutes}min`;
};

const Roadmap = ({ header, footerText, page }) => {
  const [selectedFilter, setSelectedFilter] = useState('apollo');

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={`container roadmap ${styles.roadmap}`}>
        <div className={styles.hero}>
          <Image src={hero} alt="hero" className={styles.hero_img} />
          <div className={styles.hero_info}>
            <PrismicRichText
              field={page.tokenomic_title}
              components={{
                paragraph: ({ children }) => (
                  <h1 className={styles.hero_title}>
                    {children}
                    <br />
                    <span className={styles.hero_blue}>
                      15 Nov 2023
                    </span>
                  </h1>
                ),
              }}
            />
            <PrismicRichText
              field={page.tokenomic_text}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.hero_descr}>{children}</p>
                ),
              }}
            />
            <p className={styles.hero_descr}>
              Block number:{' '}
              <PrismicRichText
                field={page.tokenomic_block}
                components={{
                  paragraph: ({ children }) => (
                    <span className={styles.hero_blue}>{children}</span>
                  ),
                }}
              />
            </p>
            <div className={styles.hero_btns}>
              <PrismicRichText
                field={page.tokenomic_link_text}
                components={{
                  paragraph: ({ children }) => (
                    <Link
                      href={page.tokenomic_link_url.url || ''}
                      target={page.tokenomic_link_url.target || ''}
                    >
                      <Button
                        className={styles.hero_btn}
                        size="large"
                        type="tetiary"
                      >
                        {children}
                        <Image src={chevron} alt="chevron" />
                      </Button>
                    </Link>
                  ),
                }}
              />
              <PrismicRichText
                field={page.tokenomic_second_link_text}
                components={{
                  paragraph: ({ children }) => (
                    <Link
                      href={page.tokenomic_second_link_url.url || ''}
                      target={page.tokenomic_second_link_url.target || ''}
                    >
                      <Button
                        className={styles.hero_btn}
                        size="large"
                        type="tetiary"
                      >
                        {children}
                        <Image src={chevron} alt="chevron" />
                      </Button>
                    </Link>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <PrismicRichText
          field={page.learn_more_title}
          components={{
            paragraph: ({ children }) => (
              <h2 className={styles.list_title}>{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={page.learn_more_subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.list_subtitle}>{children}</p>
            ),
          }}
        />
        <Slider {...settings}>
          {page.slider.map((el) => (
            <div className={styles.slider_item_wrapper} key={asText(el.title)}>
              <div className={styles.slider_item}>
                <img
                  src={el.image.url}
                  alt="image"
                  className={styles.slider_image}
                />
                <div className={styles.slider_info}>
                  <PrismicRichText
                    field={el.title}
                    components={{
                      paragraph: ({ children }) => (
                        <h2 className={styles.slider_title}>{children}</h2>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={el.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className={styles.slider_description}>{children}</p>
                      ),
                    }}
                  />
                  {/*<Link*/}
                  {/*  href={el.link.url || ''}*/}
                  {/*  target="_blank"*/}
                  {/*  className={styles.slider_btn}*/}
                  {/*>*/}
                  {/*  <Button size="large" type="tetiary">*/}
                  {/*    Learn more*/}
                  {/*    <Image src={chevron} alt="chevron" />*/}
                  {/*  </Button>*/}
                  {/*</Link>*/}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.filters}>
          {filters.map((el) => (
            <PrismicRichText
              key={el.key}
              field={el.label || page[el.labelKey]}
              components={{
                paragraph: ({ children }) => (
                  <button
                    className={`${styles.filter_btn} ${
                      el.key === selectedFilter ? styles.filter_btn_active : ''
                    }`}
                    onClick={() => setSelectedFilter(el.key)}
                  >
                    {children}
                  </button>
                ),
              }}
            />
          ))}
        </div>
        <div className={styles.posts}>
          {page[selectedFilter + '_list'].map((el) => (
            <Post data={el} key={asText(el.title)} />
          ))}
        </div>
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
  const page = await client.getSingle('roadmap');

  const arr = [];

  Object.keys(page.data).forEach((el) => {
    if (el.includes('_list')) {
      page.data[el].forEach((post) => {
        if (post.upcoming) {
          arr.push(post);
        }
      });
    }
  });
  page.data.soon_list = arr;

  return {
    props: { header, footerText: footer, page: page.data },
  };
}

export default Roadmap;
