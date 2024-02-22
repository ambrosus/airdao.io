// import { motion } from 'framer-motion';

import styles from './steps.module.scss';
import BookIcon from '@/components/Icons/BookIcon';
import SmileIcon from '@/components/Icons/SmileIcon';
import StarsIcon from '@/components/Icons/StarsIcon';

const Step = ({ className, label, title, icon, children }) => {
  return (
    <div className={`${className}`}>
      <span className={styles.label}>{label}</span>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
      <div className={styles.overlay} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

const Steps = () => {
  // const leftStepVariant = {
  //   visible: { transform: 'translateX(0)' },
  //   hidden: { transform: 'translateX(260px)' },
  // };

  // const centerStepVariant = {
  //   visible: {
  //     boxShadow:
  //       '0px 0px 0px 0px rgba(47, 43, 67, 0.10), 0px 0px 0px 0px #C2C5CC',
  //   },
  //   hidden: {
  //     boxShadow:
  //       '0px 4px 8px 0px rgba(47, 43, 67, 0.10), 0px 0px 1px 0px #C2C5CC',
  //   },
  // };

  // const rightStepVariant = {
  //   visible: { transform: 'translateX(0)' },
  //   hidden: { transform: 'translateX(-260px)' },
  // };

  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <Step
          className={styles['bg-green']}
          label="Step 1"
          title="Create your profile"
          icon={<BookIcon />}
        >
          Begin your journey by creating a profile that represents your identity
          within AirDAO.
        </Step>
      </div>
      <div className={styles.step}>
        <Step
          className={styles['bg-blue']}
          label="Step 2"
          title="Verify your identity"
          icon={<SmileIcon />}
        >
          Cement your role within our community by verifying your identity
          securely.
        </Step>
      </div>
      <div className={styles.step}>
        <Step
          className={styles['bg-orange']}
          label="Step 3"
          title="Mint your governor SBT"
          icon={<StarsIcon />}
        >
          Seize your opportunity to be a driving force by minting your Governor
          SBT (Soul Bound Token).
        </Step>
      </div>
    </div>
  );
};

export default Steps;
