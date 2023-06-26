import styles from './governance.module.scss';

const Governance = () => (
  <section className={styles.governance}>
    <div className={styles['governance-img']}></div>
    <div className={styles.governance__wrapper}>
      <div className={styles.governance__label}>GOVERNANCE</div>
      <p className={styles.governance__title}>Empowering the AirDAO Community&apos;s Decision-Making</p>
      <p className={styles.governance__text}>
        Collaborative Leadership and Transparent Decision-Making for a Stronger
        AirDAO Community
      </p>
      <button className={styles['governance__btn-primary']}>See recent votes</button>
      <button className={styles['governance__btn-secondary']}>Learn more</button>
    </div>
  </section>
);

export default Governance;
