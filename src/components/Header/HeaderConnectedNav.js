import Image from "next/image";
import useClickOutside from "../../hooks/useClickOutside";
import {useRef} from "react";
import styles from './Header.module.scss';

const HeaderConnectedNav = ({ close }) => {
  const ref = useRef(null);
  useClickOutside(ref, close);

  return (
    <div ref={ref} className={styles['connected-nav']}>
      <div className={styles['connected-nav__balance']}>
        <Image src='/airdao.svg' width='30' height='30' className={styles['connected-nav__balance-img']} alt='balance' />
        <span>0.00 AMB</span>
      </div>
      <div className={`${styles['connected-nav__hr']} ${styles['connected-nav__hr_balance']}`} />
      <a href="src/app/components" className={styles['connected-nav__product']}>
        Staking
      </a>
      <a href="src/app/components" className={styles['connected-nav__product']}>
        Staking
      </a>
      <a href="src/app/components" className={styles['connected-nav__product']}>
        Staking
      </a>
      <a href="src/app/components" className={styles['connected-nav__product']}>
        Staking
      </a>
      <a href="src/app/components" className={styles['connected-nav__product']}>
        Staking
      </a>
      <span className={styles['connected-nav__title']}>About</span>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <a href="/" className={styles['connected-nav__link']}>About AirDAO</a>
      <div className={styles['connected-nav__hr']} />
      <span className={styles['connected-nav__title']}>Community</span>
    </div>
  )
};

export default HeaderConnectedNav;
