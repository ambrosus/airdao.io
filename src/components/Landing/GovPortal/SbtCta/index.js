import styles from './sbtCta.module.scss';
import ChevronIcon from '@/components/Icons/ChevronIcon';

const SbtCta = () => (
  <div className={styles.sbtContainer}>
    <div className={styles.bgBlock}>
      <div className={styles.info}>
        <h3>Collect your first SBT and join AirDAO Governance!</h3>
        <div className={styles.ctaBlock}>
          <a
            className={styles.link}
            href="https://airdao.io/gov-portal/connect-wallet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collect Now
          </a>
          <a
            className={`${styles.link} ${styles.linkTransparent}`}
            href="https://airdao.io/academy#governance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more <ChevronIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SbtCta;
