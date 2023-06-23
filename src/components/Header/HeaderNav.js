import {useRef, useState} from "react";
import useClickOutside from "../../hooks/useClickOutside";
import styles from './Header.module.scss';

const HeaderNav = ({ close }) => {
  const [activeList, setActiveList] = useState('');

  const ref = useRef(null);
  useClickOutside(ref, () => {
    close();
    setActiveList('');
  });

  return (
    <div ref={ref} className={styles['nav-item-wrapper']}>
      <div className={styles['nav-item']}>
        <span className={styles['nav-item__label']} onClick={() => setActiveList('products')}>
          Products
        </span>
        {activeList === 'products' && (
          <div className={styles['nav-item__list']}>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
            <div className={styles['nav-item__list-item']}>
              <div className={styles['nav-item__list-img']} />
              <div>
                <p className={styles['nav-item__list-title']}>Firepot Swap</p>
                <p className={styles['nav-item__list-descr']}>Trade AMB and other crypto</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles['nav-item']}>
        <span className={styles['nav-item__label']}>About</span>
      </div>
      <div className={styles['nav-item']}>
        <span className={styles['nav-item__label']}>Company</span>
      </div>
    </div>
  )
};

export default HeaderNav;