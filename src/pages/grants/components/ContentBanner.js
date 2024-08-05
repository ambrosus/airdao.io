import ArrowRightSecondary from '@/components/Icons/ArrowRightSecondary';
import { Button } from '@airdao/ui-library';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles from '../grants.module.scss';
import Link from 'next/link';

const ContentBanner = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 27]);

  return (
    <motion.div
      style={{
        y,
        position: 'sticky',
        top: 0,
      }}
    >
      <div className={styles.contentBanner}>
        <h1>
          AirDAO’s <span>Grants</span>
        </h1>
        <span>
          Announcement of a new grant program and funding opportunities from
          AirDAO coming soon.
        </span>
        <Button size="large" type="primary">
          <Link target="_blank" href="https://t.me/airdao">
            <div className={styles.buttonContent}>
              <span>Stay tuned</span>
              <ArrowRightSecondary />
            </div>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ContentBanner;
