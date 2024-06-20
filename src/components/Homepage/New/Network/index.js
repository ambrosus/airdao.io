import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import l1 from '@/assets/icons/l1.svg';
import styles from './network.module.scss';

const details = [
  {
    title: 'Validators',
    value: '164',
  },
  {
    title: 'L1 Blockchain',
    icon: l1,
  },
  {
    title: 'Token holders',
    value: '24k+',
  },
  {
    title: 'Ultra-secure',
    icon: l1,
  },
  {
    title: 'Total transactions',
    value: '68m',
  },
  {
    title: 'Lightning fast',
    icon: l1,
  },
  {
    title: 'Total supply',
    value: '6.5b',
  },
  {
    title: 'Minimal gas fee',
    icon: l1,
  },
];

// TODO: add texts from prismic
const Network = () => {
  return (
    <section className={styles['network-container']}>
      <div className="container">
        <div className={styles['title']}>
          <div>AirDAO Network</div>
          <h2>
            Discover top-tier security, speed, and low fees with our blockchain
          </h2>
        </div>
        <div className={styles['details']}>
          {details.map(detail => (
            <div key={detail.value} className={styles['detail']}>
              <span>
                {detail.icon && <Image src={detail.icon} alt={detail.title} />}
                {detail.value && (
                  <span className={styles['value']}>{detail.value}</span>
                )}
                <span className={styles['value-title']}>{detail.title}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
