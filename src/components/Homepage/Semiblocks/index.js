import styles from './semiblocks.module.scss';
import BlockLabel from '@/components/BlockLabel';
import { Button } from '@airdao/ui-library';
import discord from './discord.svg';
import linkedin from './linkedin.svg';
import medium from './medium.svg';
import reddit from './reddit.svg';
import telegram from './telegram.svg';
import x from './x.svg';
import youtube from './youtube.svg';
import Image from 'next/image';

const Semiblocks = () => (
  <div className={styles['semiblocks']}>
    <div className={styles['governance']}>
      <BlockLabel className={styles['semiblocks__label']}>
        governance
      </BlockLabel>
      <p className={styles['semiblocks__title']}>Democracy, decentralized</p>
      <p className={styles['semiblocks__text']}>Our community-led DAO governance puts power in your hands.</p>
      <div className={styles['governance__btns']}>
        <Button type="primary" size="large">
          See recent votes
        </Button>
        <Button className={styles['semiblocks__btn']} type="tetiary" size="large">
          Learn more
        </Button>
      </div>
    </div>
    <div className={styles['community']}>
      <BlockLabel className={styles['semiblocks__label']}>
        COMMUNITY
      </BlockLabel>
      <p className={styles['semiblocks__title']}>Be a part of something bigger</p>
      <p className={styles['semiblocks__text']}>
        Join our vibrant community of supporters and developers. Engage in
        discussions, follow our socials, and be a part of the AirDAO revolution.
      </p>
      <div className={styles['community__btns']}>
        <div className={styles['community__socials']}>
          <a href="/">
            <Image src={x} alt="x" />
          </a>
          <a href="/">
            <Image src={telegram} alt="telegram" />
          </a>
          <a href="/">
            <Image src={discord} alt="discord" />
          </a>
          <a href="/">
            <Image src={reddit} alt="reddit" />
          </a>
          <a href="/">
            <Image src={youtube} alt="youtube" />
          </a>
          <a href="/">
            <Image src={discord} alt="discord" />
          </a>
          <a href="/">
            <Image src={linkedin} alt="linkedin" />
          </a>
        </div>
        <Button className={styles['semiblocks__btn']} type="tetiary" size="large">
          Contact us
        </Button>
      </div>
    </div>
  </div>
);

export default Semiblocks;
