import Image from 'next/image';

import { switchText } from '@/components/Footer/utils';
import styles from './banner.module.scss';
import phone from '../../../assets/icons/phone-top.svg';

const BannerApp = ({ data }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.holder}>
        <div className={styles.block}>
          <div className={styles.blockLeft}>
            <h3>
              Take AirDAO <span>everywhere</span>
            </h3>
            <p>
              Seamlessly Manage your portfolio, Transfer funds, and Watch
              addresses with AirDAO mobile app
            </p>
            {data.length > 0 && (
              <ul className={styles.listsLinks}>
                {data.map(item => (
                  <li key={item.imageurl.alt}>
                    <a href={item.linkurl.url} target={item.linkurl.target}>
                      {switchText(item.imageurl.alt, 'black')}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.blockRight}>
            <Image
              src={phone}
              width={347}
              height={525}
              quality={100}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerApp;
