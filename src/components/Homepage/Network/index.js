import network from './network.svg';
import Image from 'next/image';
import styles from './Network.module.scss';

const Network = () => (
  <section className={styles.network}>
    <div className={styles.network__label}>AMB NETWORK</div>
    <div className={styles['network__text-wrapper']}>
      <span className={styles['network__text-wrapper-left']}>
        <span className={styles['network__text-left-first']}>
          DeFi Doesn&apos;t Have to Be Risky.{' '}
        </span>
        <span className={styles['network__text-left-second']}>
          DeFi Can Be Safe and Secure.
        </span>
      </span>
      <span className={styles['network__text-wrapper-right']}>
        AirDAO is powered by an ultra-secure and lightning-fast layer-1
        blockchain with minimal transaction fees.
      </span>
    </div>
    <Image src={network} alt="network" className={styles.network__img} />
    <div className={styles.network__info}>
      <div className={styles['network__info-item']}>
        <p className={styles['network__info-primary']}>6.3b</p>
        <p className={styles['network__info-secondary']}>Total Supply</p>
      </div>
      <div className={styles['network__info-item']}>
        <p className={styles['network__info-primary']}>68m</p>
        <p className={styles['network__info-secondary']}>Total Transactions</p>
      </div>
      <div className={styles['network__info-item']}>
        <p className={styles['network__info-primary']}>$86m</p>
        <p className={styles['network__info-secondary']}>Market Cap</p>
      </div>
      <div className={styles['network__info-item']}>
        <p className={styles['network__info-primary']}>509</p>
        <p className={styles['network__info-secondary']}>Nodes</p>
      </div>
      <div className={styles['network__info-item']}>
        <p className={styles['network__info-primary']}>20k+</p>
        <p className={styles['network__info-secondary']}>Holders</p>
      </div>
    </div>
    <button className={styles.network__btn}>Explore Network</button>
  </section>
);

export default Network;
