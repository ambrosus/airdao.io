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
            <img {...twitterIcon} />
          </PrismicNextLink>
        )}
        {linkedin.url && (
          <PrismicNextLink field={linkedin}>
            <img {...linkedinIcon} />
          </PrismicNextLink>
        )}
      </div>
    </div>
  );
}
