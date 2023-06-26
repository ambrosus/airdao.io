import Image from "next/image";
import useClickOutside from "../../hooks/useClickOutside";
import {useRef} from "react";
import styles from './Header.module.scss';
import {asText} from "@prismicio/client";

const HeaderConnectedNav = ({ close, headerInfo }) => {
  const ref = useRef(null);
  useClickOutside(ref, close);
  console.log(headerInfo);

  const findSlice = (key) =>
    headerInfo.slices.find((el) => asText(el.primary.navlabel) === key).items;

  return (
    <div ref={ref} className={styles['connected-nav']}>
      <div className={styles['connected-nav__balance']}>
        <Image
          src="/airdao.svg"
          width="30"
          height="30"
          className={styles['connected-nav__balance-img']}
          alt="balance"
        />
        <span>0.00 AMB</span>
      </div>
      <div className={`${styles['connected-nav__hr']} ${styles['connected-nav__hr_balance']}`} />
      <div className={styles['connected-nav__products']}>
        {headerInfo.products.map((el) => (
          <a
            key={asText(el.productname)}
            className={styles['connected-nav__product']}
          >
            {asText(el.productname)}
          </a>
        ))}
      </div>
      <span className={styles['connected-nav__title']}>About</span>
      {findSlice('About').map((el) => (
        <a className={styles['connected-nav__link']} key={asText(el.navitemlabel)}>
          {asText(el.navitemlabel)}
        </a>
      ))}
      <span className={styles['connected-nav__title']}>Learn</span>
      {findSlice('Learn').map((el) => (
        <a className={styles['connected-nav__link']} key={asText(el.navitemlabel)}>
          {asText(el.navitemlabel)}
        </a>
      ))}
      <div className={styles['connected-nav__hr']} />
      <span className={styles['connected-nav__title']}>Community</span>
      <div className={styles['connected-nav__community']}>
        {findSlice('Community').map((el) => (
          <a key={asText(el.navitemlabel)} className={styles['connected-nav__community-item']}>
            <img src={el.navitemimg.url} alt={asText(el.navitemlabel)} />
          </a>
        ))}
      </div>
    </div>
  )
};

export default HeaderConnectedNav;
