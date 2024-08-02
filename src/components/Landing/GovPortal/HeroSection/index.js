import styles from './hero.module.scss';
import ChevronIcon from '@/components/Icons/ChevronIcon';

const Hero = () => (
  <section className={styles.hero}>
    <h1>Experience AirDAO's enhanced governance system</h1>
    <p>
      Join our community and participate in shaping AirDAO's future. Become a
      governor, share your ideas, and vote on important decisions.
    </p>
    <div className={styles.ctaBlock}>
      <a
        className={styles.link}
        href="https://airdao.io/gov-portal/connect-wallet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
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
  </section>
);

export default Hero;
