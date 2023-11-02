import {createClient} from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import {PrismicRichText} from '@prismicio/react';
import {useMemo, useState} from 'react';
import styles from './roadmap.module.scss';
import Post from '@/pages/roadmap/components/Post';
import {asText} from '@prismicio/client';
import Slider from 'react-slick';
import { Button } from '@airdao/ui-library';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const filters = [
  { labelKey: 'other_label', key: 'other' },
  { labelKey: 'explorer_label', key: 'explorer' },
  { labelKey: 'apollo_label', key: 'apollo' },
  { labelKey: 'multisig_label', key: 'multisig' },
];

const settings = {
  dots: true,
  infinite: true,
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
      className="slider-arrow"
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
      className="slider-arrow"
    >
      <path
        d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
        fill="#212121"
      />
    </svg>
  ),
};

const Roadmap = ({ header, footerText, page }) => {
  const [selectedFilter, setSelectedFilter] = useState('apollo');
  console.log(page);
  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={`container ${styles.roadmap}`}>
        <Slider {...settings}>
          {page.slider.map((el) => (
            <div key={asText(el.title)} className={styles.slider_item}>
              <img src={el.image.url} alt="image" className={styles.slider_image} />
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
                <Button size="large" type="tetiary">Learn more</Button>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.filters}>
          {filters.map((el) => (
            <PrismicRichText
              key={el.key}
              field={page[el.labelKey]}
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

  return {
    props: { header, footerText: footer, page: page.data },
  };
}

export default Roadmap;
