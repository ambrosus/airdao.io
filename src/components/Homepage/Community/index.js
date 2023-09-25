import styles from './community.module.scss';
import Image from 'next/image';
import chats from './chats.png';
import { Button } from '@airdao/ui-library';

const Community = () => {
  return (
    <div className={`container ${styles['community']}`}>
      <div className={styles['community__img']}>
        <Image src={chats} alt="chats" />
      </div>
      <div className={styles['community__right']}>
        <p className={styles['community__title']}>
          We&apos;re at the forefront of true decentralization and community
          participation. We put power into the hands of our community, giving
          you complete control over our future.
        </p>
        <Button className={styles['community__btn']} type="primary" size="large">
          Join community
        </Button>
        <Button type="tetiary" size="large">
          Learn more
        </Button>
      </div>
    </div>
  )
};

export default Community;
