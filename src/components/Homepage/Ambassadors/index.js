import styles from './ambassadors.module.scss';
import a1 from './ambassador1.png';
import a2 from './ambassador2.png';
import a3 from './ambassador3.png';
import a4 from './ambassador4.png';
import a5 from './ambassador5.png';
import a6 from './ambassador6.png';
import Image from "next/image";

const Ambassadors = () => (
  <section className={styles.ambassadors}>
    <div className={styles.ambassadors__overlay}></div>
    <div className={styles.ambassadors__inner}>
      <Image src={a1} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_1}`} />
      <Image src={a2} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_2}`} />
      <Image src={a3} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_3}`} />
      <Image src={a4} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_4}`} />
      <Image src={a5} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_5}`} />
      <Image src={a6} alt="ambassador" className={`${styles.ambassadors__img} ${styles.ambassadors__img_6}`} />
      <div className={styles.ambassadors__label}>AMBASSADORS</div>
      <p className={styles.ambassadors__title}>
        Become an ambassador and spread awareness about AirDAO in your
        community.
      </p>
      <button className={styles['ambassadors__btn-primary']}>
        Become an Ambassador
      </button>
      <button>Learn more</button>
    </div>
  </section>
);

export default Ambassadors;
