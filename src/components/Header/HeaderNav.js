import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './Header.module.scss';
import { asText } from '@prismicio/client';
import Link from 'next/link';

const HeaderNav = ({ close, headerInfo, className, isOpen }) => {
  const [activeList, setActiveList] = useState('');

  const ref = useRef(null);
  useClickOutside(
    ref,
    () => {
      close();
      setActiveList('');
    },
    isOpen
  );

  const handleList = (key) => {
    setActiveList((state) => (state === key ? '' : key));
  };

  return (
    <div
      ref={ref}
      className={`${styles['nav-item-wrapper']} ${styles[className]}`}
    >
      {headerInfo.slices.map((el) => (
        <div className={`${styles['nav-item']} ${activeList === asText(el.primary.navlabel) ? styles['nav-item_active'] : ''}`} key={asText(el.primary.navlabel)}>
          <span
            className={styles['nav-item__label']}
            onClick={() => handleList(asText(el.primary.navlabel))}
          >
            {asText(el.primary.navlabel)}
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles['nav-item__label-img']}
            >
              <path d="M5.87103 7.03223C5.03034 7.03223 4.56485 8.00656 5.09309 8.66056L8.90755 13.3832C9.50792 14.1266 10.641 14.1266 11.2414 13.3832L15.0558 8.66056C15.5841 8.00656 15.1186 7.03223 14.2779 7.03223H5.87103Z" fill="#222426"/>
            </svg>
          </span>
          <div className={styles['nav-item__list-wrapper']}>
            <div className={styles['nav-item__list']}>
              {el.items.map((item) => (
                <Link
                  href={asText(item.navitemurl)}
                  key={asText(item.navitemlabel)}
                  className={styles['nav-item__list-item']}
                >
                  <img
                    src={item.navitemimg.url}
                    width="40"
                    height="40"
                    className={styles['nav-item__list-img']}
                    alt={asText(item.navitemlabel)}
                  />
                  <div>
                    <p className={styles['nav-item__list-title']}>
                      {asText(item.navitemlabel)}
                    </p>
                    <p className={styles['nav-item__list-descr']}>
                      {asText(item.navitemdescr)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderNav;
