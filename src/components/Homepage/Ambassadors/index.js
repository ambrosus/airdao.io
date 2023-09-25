import styles from './ambassarods.module.scss';
import BlockLabel from '@/components/BlockLabel';
import ambassador1 from './ambassador-1.png';
import ambassador2 from './ambassador-2.png';
import ambassador3 from './ambassador-3.png';
import ambassador4 from './ambassador-4.png';
import ambassador5 from './ambassador-5.png';
import ambassador6 from './ambassador-6.png';
import ambassador7 from './ambassador-7.png';
import ambassador8 from './ambassador-8.png';
import ambassador9 from './ambassador-9.png';
import Image from 'next/image';
import {Button} from '@airdao/ui-library';

const Ambassadors = () => (
  <div className={styles['ambassadors']}>
    <BlockLabel className={styles['ambassadors__label']}>
      AMBASSADORS
    </BlockLabel>
    <h3 className={styles['ambassadors__title']}>
      Join the <span>Ambassador Program</span>
    </h3>
    <p className={styles['ambassadors__text']}>
      We support individuals from diverse backgrounds eager to spread the word
      about our thriving ecosystem. We&apos;re welcoming and inclusive and want
      every ambassador to feel valued and inspired.
    </p>
    <div className={styles['ambassadors__list']}>
      <Image src={ambassador1} alt="ambassador1" />
      <Image src={ambassador2} alt="ambassador2" />
      <Image src={ambassador3} alt="ambassador3" />
      <Image src={ambassador4} alt="ambassador4" />
      <Image src={ambassador5} alt="ambassador5" />
      <Image src={ambassador6} alt="ambassador6" />
      <Image src={ambassador7} alt="ambassador7" />
      <Image src={ambassador8} alt="ambassador8" />
      <Image src={ambassador9} alt="ambassador9" />
    </div>
    <div className={styles['ambassadors__btns']}>
      <Button type="primary" size="large">
        Become an Ambassador
      </Button>
      <Button type="tetiary" size="large">
        Learn more
      </Button>
    </div>
  </div>
);

export default Ambassadors;
