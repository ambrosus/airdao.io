import styles from './community.module.scss'
import discord from './DiscordLogo.svg';
import telegram from './TelegramLogo.svg';
import twitter from './TwitterLogo.svg';
import medium from './MediumLogo.svg';
import linkedin from './LinkedinLogo.svg';
import reddit from './RedditLogo.svg';
import Image from "next/image";

const Community = () => (
  <section className={styles['community-block']}>
    <div className={styles['community-block__left']}>
      <div className={styles['community-block__label']}>COMMUNITY</div>
      <p className={styles['community-block__title']}>
        Be a Part of Something Bigger: Your Chance to Influence the DeFi
        Landscape!
      </p>
      <p className={styles['community-block__text']}>
        Join AirDAO&apos;s vibrant community of supporters and developers. Engage in
        discussions, follow us on social, and be a part of the DeFi revolution!
      </p>
    </div>
    <div className={styles['community-block__right']}>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>Discord</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={discord} alt='discord' />
      </div>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>Telegram</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={telegram} alt='discord' />
      </div>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>Twitter</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={twitter} alt='discord' />
      </div>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>Medium</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={medium} alt='discord' />
      </div>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>LinkedIn</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={linkedin} alt='discord' />
      </div>
      <div className={styles['community-block-item']}>
        <p className={styles['community-block-item__title']}>Reddit</p>
        <p className={styles['community-block-item__text']}>3k members</p>
        <Image src={reddit} alt='discord' />
      </div>
    </div>
  </section>
);

export default Community;
