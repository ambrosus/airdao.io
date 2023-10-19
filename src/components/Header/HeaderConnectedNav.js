import Image from 'next/image';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from './Header.module.scss';
import { asText } from '@prismicio/client';
import Link from 'next/link';

const HeaderConnectedNav = ({ close, headerInfo, isOpen, balance }) => {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const findSlice = (key) =>
    headerInfo.slices.find((el) => asText(el.primary.navlabel) === key)?.items;

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
        <span>{balance} AMB</span>
      </div>
      <div
        className={`${styles['connected-nav__hr']} ${styles['connected-nav__hr_balance']}`}
      />
      <div className={styles['connected-nav__products']}>
        {headerInfo.products.map((el) => (
          <a
            key={asText(el.productname)}
            href={el.producturl.url}
            className={styles['connected-nav__product']}
          >
            {asText(el.productname)}
          </a>
        ))}
      </div>
      <span className={styles['connected-nav__title']}>About</span>
      {findSlice('About').map((el) => (
        <Link
          href={el.navitemlink.url || ''}
          target={el.navitemlink.target || ''}
          className={styles['connected-nav__link']}
          key={asText(el.navitemlabel)}
        >
          {asText(el.navitemlabel)}
        </Link>
      ))}
      {findSlice('Learn') && (
        <>
          <span className={styles['connected-nav__title']}>Learn</span>
          {findSlice('Learn').map((el) => (
            <Link
              href={el.navitemlink.url || ''}
              target={el.navitemlink.target || ''}
              className={styles['connected-nav__link']}
              key={asText(el.navitemlabel)}
            >
              {asText(el.navitemlabel)}
            </Link>
          ))}
        </>
      )}
      <div className={styles['connected-nav__hr']} />
      <span className={styles['connected-nav__title']}>Community</span>
      <div className={styles['connected-nav__community']}>
        {findSlice('Community').map((el) => (
          <Link
            href={el.navitemlink.url || ''}
            target={el.navitemlink.target || ''}
            key={asText(el.navitemlabel)}
            className={styles['connected-nav__community-item']}
            rel="nofollow"
          >
            <img src={el.navitemimg.url} alt={asText(el.navitemlabel)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderConnectedNav;
