import styles from './hero.module.scss';
import { Button } from '@airdao/ui-library';
import Image from 'next/image';
import ambassadors from './ambassadors.png';

const Hero = () => (
  <div className={`container ${styles.hero}`}>
    <div className={styles.hero__left}>
      <h1 className={styles.hero__title}>A global movement with a shared vision</h1>
      <p className={styles.hero__text}>
        We support individuals from diverse backgrounds eager to spread the word
        about our thriving ecosystem. We&apos;re welcoming and inclusive and
        want every ambassador to feel valued and inspired.
      </p>
      <Button className={styles.hero__btn} type="secondary" size="large">
        Become an Ambassador
      </Button>
    </div>
    <Image src={ambassadors} alt="ambassadors" className={styles.hero__img} />
  </div>
);

export default Hero;
