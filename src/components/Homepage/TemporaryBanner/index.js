import styles from './temp-banner.module.scss';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-additional.svg';
import { Button } from '@airdao/ui-library';
import { useEffect, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

const targetDate = '2024-09-15';

const TemporaryBanner = ({
  title,
  bg,
  link,
  linkText,
  date,
  bgMobile,
  logo,
}) => {
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    const calculateRemainingDays = () => {
      const currentDate = new Date();
      const target = new Date(date);
      const timeDiff = target - currentDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setRemainingDays(daysDiff > 0 ? daysDiff : 0);
    };

    calculateRemainingDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  let isMobile = false;
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    isMobile = true;
  }

  return (
    <section className="container">
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${isMobile ? bgMobile.url : bg.url})` }}
      >
        <div className={styles.left}>
          <span className={styles.day}>{remainingDays}</span>
          <span className={styles.day_text}>days left</span>
        </div>
        <div className={styles.right}>
          <img src={logo.url} alt="starfleet" className={styles.logo} />
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => (
                <p className={styles.text}>{children}</p>
              ),
            }}
          />
          <PrismicNextLink field={link}>
            <PrismicRichText
              field={linkText}
              components={{
                paragraph: ({ children }) => (
                  <Button type="primary" size="large" className={styles.btn}>
                    {children}
                    <Image src={chevron} alt="Continue Button" />
                  </Button>
                ),
              }}
            />
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default TemporaryBanner;
