import { motion, useAnimation } from 'framer-motion';

import BookIcon from '@/components/Icons/BookIcon';
import styles from './steps.module.scss';
import SmileIcon from '@/components/Icons/SmileIcon';
import StarsIcon from '@/components/Icons/StarsIcon';

const Step = ({ className, label, title, icon, children }) => {
  return (
    <div className={`${className}`}>
      <span className={styles.label}>{label}</span>
      <h4>{title}</h4>
      <p>{children}</p>
      <div className={styles.overlay} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

const Steps = () => {
  const leftStepVariant = {
    visible: { transform: 'translateX(0)' },
    hidden: { transform: 'translateX(260px)' },
  };
  const centerStepVariant = {
    visible: {
      boxShadow:
        '0px 0px 0px 0px rgba(47, 43, 67, 0.10), 0px 0px 0px 0px #C2C5CC',
    },
    hidden: {
      boxShadow:
        '0px 4px 8px 0px rgba(47, 43, 67, 0.10), 0px 0px 1px 0px #C2C5CC',
    },
  };

  const rightStepVariant = {
    visible: { transform: 'translateX(0)' },
    hidden: { transform: 'translateX(-260px)' },
  };

  return (
    <div className={styles.steps}>
      <motion.div
        className={styles.step}
        variants={leftStepVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
      >
        <Step
          className={styles['bg-green']}
          label="Step 1"
          title="Create your profile"
          icon={<BookIcon />}
        >
          Begin your journey by creating a profile that represents your identity
          within AirDAO.
        </Step>
      </motion.div>
      <motion.div
        className={styles.step}
        variants={centerStepVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
      >
        <Step
          className={styles['bg-blue']}
          label="Step 2"
          title="Verify your identity"
          icon={<SmileIcon />}
        >
          Cement your role within our community by verifying your identity
          securely.
        </Step>
      </motion.div>
      <motion.div
        className={styles.step}
        variants={rightStepVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
      >
        <Step
          className={styles['bg-orange']}
          label="Step 3"
          title="Mint your governor SBT"
          icon={<StarsIcon />}
        >
          Seize your opportunity to be a driving force by minting your Governor
          SBT (Soul Bound Token).
        </Step>
      </motion.div>
    </div>
  );
};

export default Steps;