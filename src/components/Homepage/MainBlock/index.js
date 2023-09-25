import styles from './main-block.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import ku from './kucoin.svg';

const MainBlock = () => (
  <section className={`container ${styles['main-block']}`}>
    <h1 className={styles['main-block__title']}>Redefining Governance</h1>
    <p className={styles['main-block__subtitle']}>
      AirDAO is a community-governed layer one blockchain and ecosystem of web3
      dApps, powered by AMB.
    </p>
    <BlockLabel className={styles['main-block__label']}>TRUSTED BY</BlockLabel>
    <div className={styles['main-block__partners']}>
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
      <Image src={ku} alt="ku" />
    </div>
  </section>
);

export default MainBlock;
