import styles from './network.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import amb from './amb.svg';
import { Button } from '@airdao/ui-library';

const Network = () => (
  <div className={`container ${styles['network']}`}>
    <div>
      <BlockLabel>
        AIRDAO NETWORK
      </BlockLabel>
      <p className={styles['network__title']}>
        Our layer - one blockchain is ultra-secure and lightning-fast, with minimal transaction fees
      </p>
      <div className={styles['network__list']}>
        <div>
          <p className={styles['network-list__value']}>153</p>
          <p className={styles['network-list__text']}>Validators</p>
        </div>
        <div>
          <p className={styles['network-list__value']}>153</p>
          <p className={styles['network-list__text']}>Validators</p>
        </div>
        <div>
          <p className={styles['network-list__value']}>153</p>
          <p className={styles['network-list__text']}>Validators</p>
        </div>
        <div>
          <p className={styles['network-list__value']}>153</p>
          <p className={styles['network-list__text']}>Validators</p>
        </div>
      </div>
      <Button size="large" type="primary">
        Buy AMB
      </Button>
    </div>
    <Image src={amb} alt="amb" className={styles['network__img']} />
  </div>
);

export default Network;