import React from 'react';
import Image from 'next/image';

import styles from './grants.module.scss';
import { grantTiers } from './data';

import Logo from './assets/logo.svg';
import Img1 from './assets/group-photo.webp';
import Img2 from './assets/journey-illustration.svg';
import Img3 from './assets/challenge-illustration.svg';

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
                <a
                  href="https://t.me/airbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
