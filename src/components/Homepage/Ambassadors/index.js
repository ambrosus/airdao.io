import styles from './ambassadors.module.scss';

const Ambassadors = () => (
  <section className={styles.ambassadors}>
    <div className={styles.ambassadors__overlay}></div>
    <div className={styles.ambassadors__inner}>
      <div className={styles.ambassadors__label}>AMBASSADORS</div>
      <p className={styles.ambassadors__title}>
        Become an ambassador and spread awareness about AirDAO in your
        community.
      </p>
      <button className={styles['ambassadors__btn-primary']}>Become an Ambassador</button>
      <button>Learn more</button>
    </div>
  </section>
);

export default Ambassadors;
