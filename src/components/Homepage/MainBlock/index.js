import styles from './main-block.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import shape from './shape.svg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  slidesToShow: 9,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

const MainBlock = ({ title, label, partners, subtitle }) => (
  <section className={`container ${styles['main-block']}`}>
    <Image className={styles.shape} src={shape} alt="shape" />
    <Image
      className={`${styles.shape} ${styles['shape-right']}`}
      src={shape}
      alt="shape"
    />
    <PrismicRichText
      field={title}
      components={{
        paragraph: ({ children }) => (
          <h1 className={styles['main-block__title']}>{children}</h1>
        ),
      }}
    />
    <PrismicRichText
      field={subtitle}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['main-block__subtitle']}>{children}</p>
        ),
      }}
    />
    <PrismicRichText
      field={label}
      components={{
        paragraph: ({ children }) => (
          <BlockLabel className={styles['main-block__label']}>
            {children}
          </BlockLabel>
        ),
      }}
    />
    <div className={styles['main-block__partners']}>
      <Slider {...settings}>
        {partners.map((el) => (
          <Image
            className={styles['main-block__partner']}
            width={52}
            height={52}
            key={el.partner.url}
            src={el.partner.url}
            alt="partner"
          />
        ))}
      </Slider>
    </div>
  </section>
);

export default MainBlock;
