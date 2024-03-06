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
import { useRouter } from 'next/router';

export default function Banner({ data, setShowBanner, nextLink = true }) {
  const router = useRouter();

  const type = data?.type;
  const [intervalSize, setIntervalSize] = useState(500);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntervalSize(2000);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth', block: 'start' });
  }, []);

  const handleRedirect = value => {
    if (typeof window === 'undefined' || window.innerWidth > 650) return null;

    if (value.target === '_blank') {
      window.open(value.url, '_blank');
    } else {
      router.push(value.url);
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
          <div className={styles['carousel-item']} key={index}>
            {intervalSize === 2000 && (
              <div className={styles['carousel-item-container']}>
                <PrismicNextLink
                  field={item?.button_link}
                  className={styles['carousel-left-side']}
                >
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
                </PrismicNextLink>
                <div className={styles['carousel-right-side']}>
                  {nextLink && (
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
                    </PrismicNextLink>
                  )}
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
