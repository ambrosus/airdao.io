import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './Header.module.scss';
import { asText } from '@prismicio/client';

const HeaderNav = ({ close, headerInfo }) => {
  const [activeList, setActiveList] = useState('');

  const ref = useRef(null);
  useClickOutside(ref, () => {
    close();
    setActiveList('');
  });

  const handleList = (key) => {
    setActiveList((state) => (state === key ? '' : key));
  };

  return (
    <div ref={ref} className={styles['nav-item-wrapper']}>
      {headerInfo.slices.map((el) => (
        <div className={styles['nav-item']} key={asText(el.primary.navlabel)}>
          <span
            className={styles['nav-item__label']}
            onClick={() => handleList(asText(el.primary.navlabel))}
          >
            {asText(el.primary.navlabel)}
            <img
              src="/caret.svg"
              alt="caret"
              className={`${styles['nav-item__label-img']} ${
                activeList === asText(el.primary.navlabel)
                  ? styles['nav-item__label-img_active']
                  : ''
              }`}
            />
          </span>
          {activeList === asText(el.primary.navlabel) && (
            <div className={styles['nav-item__list']}>
              {el.items.map((item) => (
                <div
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
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderNav;
