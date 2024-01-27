import BookIcon from '@/components/Icons/BookIcon';
import styles from './steps.module.scss';
import SmileIcon from '@/components/Icons/SmileIcon';
import StarsIcon from '@/components/Icons/StarsIcon';

const Step = ({ className, label, title, icon, children }) => {
  return (
    <div className={`${styles.step} ${className}`}>
      <span className={styles.label}>{label}</span>
      <h4>{title}</h4>
      <p>{children}</p>
      <div className={styles.overlay} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

const Steps = () => {
  return (
    <div className={styles.steps}>
      <Step
        className={styles['bg-green']}
        label="Step 1"
        title="Create your profile"
        icon={<BookIcon />}
      >
        Begin your journey by creating a profile that represents your identity
        within AirDAO.
      </Step>
      <Step
        className={styles['bg-blue']}
        label="Step 2"
        title="Verify your identity"
        icon={<SmileIcon />}
      >
        Cement your role within our community by verifying your identity
        securely.
      </Step>
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
  );
};

export default Steps;
