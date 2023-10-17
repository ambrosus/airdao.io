import { PrismicRichText } from '@prismicio/react';
import styles from './team.module.scss';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { useState } from 'react';
import Slider from 'react-slick';
import twitterIcon from '../../../assets/icons/twitter.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Team({ heading, tech, council, community }) {
  const data = {
    tech,
    council,
    community,
  };

  const [active, setActive] = useState('council');

  return (
    <div className={`container`}>
      <PrismicRichText
        components={{
          heading2: ({ children }) => (
            <h2 className={styles.heading}>{children}</h2>
          ),
        }}
        field={heading}
      />
      <div className={styles.buttons}>
        <button
          onClick={() => setActive('council')}
          className={`${styles.button} ${
            active === 'council' ? styles.active : ''
          }`}
        >
          Council & Operations
        </button>
        <button
          onClick={() => setActive('tech')}
          className={`${styles.button} ${
            active === 'tech' ? styles.active : ''
          }`}
        >
          Tech
        </button>
        <button
          onClick={() => setActive('community')}
          className={`${styles.button} ${
            active === 'community' ? styles.active : ''
          }`}
        >
          Community
        </button>
      </div>

      <TeamSlider data={data} active={active} />

      <div className={styles.cards}>
        {data[active].map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

function TeamSlider({ data, active }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    infinite: false,
    rows: 2,
    className: styles.slider,
    dotsClass: styles.dots,
    customPaging: (i) => <div className={styles['nav-button']}>{i + 1}</div>,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {data[active].map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </Slider>
    </div>
  );
}

function TeamCard({ avatar, name, position, twitter, linkedin }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar_container}>
        <PrismicNextImage field={avatar} className={styles.avatar} />
      </div>
      <PrismicRichText
        components={{
          heading3: ({ children }) => (
            <h3 className={styles.name}>{children}</h3>
          ),
        }}
        field={name}
      />
      <PrismicRichText
        components={{
          paragraph: ({ children }) => (
            <p className={styles.position}>{children}</p>
          ),
        }}
        field={position}
      />
      <div className={styles.socials}>
        {twitter.url && (
          <PrismicNextLink field={twitter}>
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.901 5.46997H26.581L18.541 14.66L28 27.163H20.594L14.794 19.579L8.156 27.163H4.474L13.074 17.333L4 5.47097H11.594L16.837 12.403L22.901 5.46997ZM21.61 24.961H23.649L10.486 7.55697H8.298L21.61 24.961Z" fill="#0E0E0E"/>
            </svg>
          </PrismicNextLink>
        )}
        {linkedin.url && (
          <PrismicNextLink field={linkedin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <g clipPath="url(#clip0_6147_4468)">
                <path d="M27 3.31641H5C4.46957 3.31641 3.96086 3.52712 3.58579 3.90219C3.21071 4.27727 3 4.78597 3 5.31641V27.3164C3 27.8468 3.21071 28.3555 3.58579 28.7306C3.96086 29.1057 4.46957 29.3164 5 29.3164H27C27.5304 29.3164 28.0391 29.1057 28.4142 28.7306C28.7893 28.3555 29 27.8468 29 27.3164V5.31641C29 4.78597 28.7893 4.27727 28.4142 3.90219C28.0391 3.52712 27.5304 3.31641 27 3.31641ZM12 22.3164C12 22.5816 11.8946 22.836 11.7071 23.0235C11.5196 23.2111 11.2652 23.3164 11 23.3164C10.7348 23.3164 10.4804 23.2111 10.2929 23.0235C10.1054 22.836 10 22.5816 10 22.3164V14.3164C10 14.0512 10.1054 13.7968 10.2929 13.6093C10.4804 13.4218 10.7348 13.3164 11 13.3164C11.2652 13.3164 11.5196 13.4218 11.7071 13.6093C11.8946 13.7968 12 14.0512 12 14.3164V22.3164ZM11 12.3164C10.7033 12.3164 10.4133 12.2284 10.1666 12.0636C9.91997 11.8988 9.72771 11.6645 9.61418 11.3904C9.50065 11.1163 9.47094 10.8147 9.52882 10.5238C9.5867 10.2328 9.72956 9.96552 9.93934 9.75575C10.1491 9.54597 10.4164 9.40311 10.7074 9.34523C10.9983 9.28735 11.2999 9.31706 11.574 9.43059C11.8481 9.54412 12.0824 9.73638 12.2472 9.98305C12.412 10.2297 12.5 10.5197 12.5 10.8164C12.5 11.2142 12.342 11.5958 12.0607 11.8771C11.7794 12.1584 11.3978 12.3164 11 12.3164ZM23 22.3164C23 22.5816 22.8946 22.836 22.7071 23.0235C22.5196 23.2111 22.2652 23.3164 22 23.3164C21.7348 23.3164 21.4804 23.2111 21.2929 23.0235C21.1054 22.836 21 22.5816 21 22.3164V17.8164C21 17.1534 20.7366 16.5175 20.2678 16.0486C19.7989 15.5798 19.163 15.3164 18.5 15.3164C17.837 15.3164 17.2011 15.5798 16.7322 16.0486C16.2634 16.5175 16 17.1534 16 17.8164V22.3164C16 22.5816 15.8946 22.836 15.7071 23.0235C15.5196 23.2111 15.2652 23.3164 15 23.3164C14.7348 23.3164 14.4804 23.2111 14.2929 23.0235C14.1054 22.836 14 22.5816 14 22.3164V14.3164C14.0012 14.0715 14.0923 13.8355 14.256 13.6533C14.4197 13.471 14.6446 13.3552 14.888 13.3278C15.1314 13.3003 15.3764 13.3632 15.5765 13.5044C15.7767 13.6456 15.918 13.8554 15.9738 14.0939C16.6502 13.635 17.4389 13.369 18.2552 13.3246C19.0714 13.2801 19.8844 13.4588 20.6067 13.8415C21.329 14.2242 21.9335 14.7964 22.3551 15.4967C22.7768 16.197 22.9997 16.999 23 17.8164V22.3164Z" fill="#0E0E0E"/>
              </g>
              <defs>
                <clipPath id="clip0_6147_4468">
                  <rect width="32" height="32" fill="white" transform="translate(0 0.316406)"/>
                </clipPath>
              </defs>
            </svg>
          </PrismicNextLink>
        )}
      </div>
    </div>
  );
}
