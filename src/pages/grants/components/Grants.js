import React from 'react';
import Image from 'next/image';
import styles from '../grants.module.scss';

import Logo from './assets/logo.svg';
import Img1 from './assets/group-photo.webp';
import Img2 from './assets/journey-illustration.svg';
import Img3 from './assets/challenge-illustration.svg';

import Tier1 from './assets/tier-1.svg';
import Tier2 from './assets/tier-2.svg';
import Tier3 from './assets/tier-3.svg';
import Tier4 from './assets/tier-4.svg';

const grantTiers = {
  card1: {
    img: Tier1,
    alt: 'early_stage_icon',
    heading: 'Support early-stage ideas or prototypes',
    description: 'Basic proof of concept or clear roadmap required.',
  },
  card2: {
    img: Tier2,
    alt: 'development_icon',
    heading: 'Fund projects in the development phase that have shown potential',
    description:
      'Detailed project plan, technical specifications, and initial traction or community interest.',
  },
  card3: {
    img: Tier3,
    alt: 'large_scale_icon',
    heading: 'Large-scale projects with significant impact potential',
    description:
      'Proven track record, detailed budget, and comprehensive milestones.',
  },
  card4: {
    img: Tier4,
    alt: 'game_changer_icon',
    heading: 'Game changer',
    description:
      'Strategic alignment with AirDAO goals, co-funding, or resource-sharing agreements.',
  },
};

const Grants = ({ email }) => {
  return (
    <section className={styles.grant}>
      <div className={styles.inlineWrapper}>
        <div className={styles.grantHero}>
          <Image src={Logo} alt="Logo" height={275} width={275} />
          <h1 className={styles.title}>
            AirDAO’s <b>Grants</b>
          </h1>
        </div>
        <div className={styles.grantInfo}>
          <div className={`${styles.infoItem} ${styles.itemA}`}>
            <Image src={Img1} alt="group-photo" width={524} height={440} />
            <div className={`${styles.infoText} ${styles.textA}`}>
              <h3>Our journey together</h3>
              <p>Be nourished by our team of experts in various disciplines.</p>
            </div>
          </div>
          <div className={`${styles.infoItem} ${styles.itemB}`}>
            <Image
              src={Img2}
              alt="journey-illustration"
              width={250}
              height={227}
            />
            <div className={styles.infoText}>
              <h3 className={styles.textPosition}>
                Be part of our hive of human talents
              </h3>
            </div>
          </div>
          <div className={`${styles.infoItem} ${styles.itemC}`}>
            <div className={styles.infoText}>
              <h3>Ecosystem growth</h3>
              <p>
                We encourage the development of innovative solutions that align
                with AirDAO goals and vision.
              </p>
            </div>
          </div>
          <div className={`${styles.infoItem} ${styles.itemD}`}>
            <Image
              src={Img3}
              alt="challenge-illustration"
              width={401}
              height={267}
            />
            <div className={styles.infoText}>
              <h3>Embrace the challenge:</h3>
              <p className={styles.indent}>
                Push boundaries, be bold. You are the future
              </p>
            </div>
          </div>
        </div>
        <div className={styles.grantTiers}>
          <h3 className={styles.title}>Four grant tiers</h3>
          <div className={styles.tierBlock}>
            <div className={styles.tierList}>
              {Object.values(grantTiers)?.map((card, index) => (
                <div key={index} className={styles.tierItem}>
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={100}
                    height={100}
                  />
                  <div className={styles.tierText}>
                    <h3>{card.heading}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.ctaBlock}>
              <a
                href="https://forms.gle/TYWusNCkHqEmdEaS9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyNow}
              >
                Apply now!
              </a>
              <p className={styles.ctaText}>
                If you have questions before submitting your project
                application, you can contact us via
                <a href={`mailto:${email}`}> {email}</a> or {''}
                <a href="t.me/airbuilders" rel="noopener noreferrer">
                  t.me/airbuilders.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grants;
