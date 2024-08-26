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
          Submit your proposals to{' '}
          <Link href="mailto:builders@airdao.io" className={styles.link}>
            builders@airdao.io
          </Link>
        </span>
      </div>
    </motion.div>
  );
};

export default ContentBanner;
