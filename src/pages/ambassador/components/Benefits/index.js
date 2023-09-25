import styles from './benefits.module.scss';
import img from './amb.svg';
import Image from 'next/image';

const Benefits = () => (
  <div className={`container ${styles.benefits}`}>
    <h2 className={styles.benefits__title}>Why join our Ambassador Program?</h2>
    <div className={styles.benefits__list}>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
      <div className={styles.benefits__item}>
        <Image src={img} alt="benefit" />
        <p className={styles['benefits__item-title']}>AMB token rewards</p>
        <p className={styles['benefits__item-text']}>
          Earn AMB for growing our community, creating content, organizing
          Earn AMB for growing our community, creating content, organizing
          events, and developing tools.
        </p>
      </div>
    </div>
  </div>
);

export default Benefits;
