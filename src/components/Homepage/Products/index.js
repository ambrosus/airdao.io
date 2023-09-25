import BlockLabel from '@/components/BlockLabel';
import { Button } from '@airdao/ui-library';
import staking from './staking.svg';
import bridge from './bridge.svg';
import Image from 'next/image';
import styles from './products.module.scss';

const Products = () => (
  <section className={`container ${styles['products']}`}>
    <div className={styles['product']}>
      <div>
        <BlockLabel>staking</BlockLabel>
        <p className={styles['product__title']}>
          Help secure the AirDAO network and earn AMB rewards
        </p>
        <Button type="secondary" size="large" className={styles['product__btn']}>
          Start earning
        </Button>
        <Button type="tetiary" size="large">
          Learn more
        </Button>
      </div>
      <Image src={staking} alt="staking" />
    </div>
    <div className={styles['product']}>
      <div>
        <BlockLabel>staking</BlockLabel>
        <p className={styles['product__title']}>
          Help secure the AirDAO network and earn AMB rewards
        </p>
        <Button type="secondary" size="large" className={styles['product__btn']}>
          Start earning
        </Button>
        <Button type="tetiary" size="large">
          Learn more
        </Button>
      </div>
      <Image src={bridge} alt="staking" />
    </div>
    <div className={styles['product']}>
      <div>
        <BlockLabel>staking</BlockLabel>
        <p className={styles['product__title']}>
          Help secure the AirDAO network and earn AMB rewards
        </p>
        <Button type="secondary" size="large" className={styles['product__btn']}>
          Start earning
        </Button>
        <Button type="tetiary" size="large">
          Learn more
        </Button>
      </div>
      <Image src={staking} alt="staking" />
    </div>
    <div className={styles['product']}>
      <div>
        <BlockLabel>staking</BlockLabel>
        <p className={styles['product__title']}>
          Help secure the AirDAO network and earn AMB rewards
        </p>
        <Button
          type="secondary"
          size="large"
          className={styles['product__btn']}
        >
          Start earning
        </Button>
        <Button type="tetiary" size="large">
          Learn more
        </Button>
      </div>
      <Image src={staking} alt="staking" />
    </div>
  </section>
);

export default Products;
