'use client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './banner.module.scss';
import CloseIcon from './icons/closeIcon.svg';
import GlobeIcon from './icons/globeIcon.svg';
import GlobeWhiteIcon from './icons/globeWhiteIcon.svg';
import LinkIcon from './icons/linkIcon.svg';
import {useRouter} from 'next/router';

export default function Banner({ data, setShowBanner }) {
  const router = useRouter();

  const type = data?.type;
  const [intervalSize, setIntervalSize] = useState(500);

  useEffect(() => {
    setTimeout(() => {
      setIntervalSize(2000);
    }, 1000);
  }, []);

  const handleRedirect = (value) => {
    if (typeof window === 'undefined') return null;

    if (value.target === '_blank') {
      window.open(value.url, '_blank');
    } else if (window.innerWidth < 650) {
      router.push(value.url, value.target);
    }
  };

  return (
    <div
      className={styles['banner']}
      style={{
        background:
          type === 'error'
            ? '#FF4747'
            : type === 'warning'
            ? '#FFE773'
            : '#BBE061',
      }}
    >
      <Carousel
        className={styles[type === 'error' ? 'carousel-white' : 'carousel']}
        infiniteLoop
        autoPlay
        autoFocus
        interval={intervalSize}
        axis="vertical"
        showArrows={false}
        stopOnHover
        verticalSwipe="natural"
        showThumbs={false}
        showStatus={false}
      >
        {data?.content?.map((item, index) => (
          <div className={styles['carousel-item']} key={index} onClick={() => handleRedirect(item?.button_link)}>
            {intervalSize === 2000 && (
              <div className={styles['carousel-item-container']}>
                <div className={styles['carousel-left-side']}>
                  <Image
                    className={styles['carousel-icon']}
                    src={type === 'error' ? GlobeWhiteIcon : GlobeIcon}
                    alt="globe"
                  />
                  <PrismicRichText
                    field={item?.title}
                    components={{
                      paragraph: ({ children }) => (
                        <h1
                          className={styles['carousel-item-text']}
                          style={{
                            color: type === 'error' ? 'white' : 'black',
                          }}
                        >
                          {children}
                        </h1>
                      ),
                    }}
                  />
                </div>
                <div className={styles['carousel-right-side']}>
                  <PrismicNextLink
                    field={item?.button_link}
                    rel="nofollow"
                    className={styles['carousel-right-side-button']}
                    style={{
                      background:
                        type === 'error'
                          ? '#FFF'
                          : type === 'warning'
                          ? '#F3DC6E'
                          : '#B2D65D',
                    }}
                  >
                    <PrismicRichText
                      field={item?.button_title}
                      components={{
                        paragraph: ({ children }) => (
                          <p className={styles['carousel-right-side-text']}>
                            {children}
                          </p>
                        ),
                      }}
                    />
                    <Image src={LinkIcon} alt="link" />
                  </PrismicNextLink>
                  <button
                    className={styles['carousel-button']}
                    onClick={() => setShowBanner(false)}
                  >
                    <Image src={CloseIcon} alt="close" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
