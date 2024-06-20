import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import community1 from '@/assets/img/homepage/community/community-01.png';
import community2 from '@/assets/img/homepage/community/community-02.png';
import styles from './mission.module.scss';
import Link from 'next/link';
import { Button } from '@airdao/ui-library';

const statistics = [
  {
    value: '40+',
    title: 'Team members around the world',
  },
  {
    value: '9',
    title: 'Community elected council members',
  },
  {
    value: '10+',
    title: 'Regional communities',
  },
  {
    value: '60k+',
    title: 'Community members',
  },
];

// TODO: add texts from prismic
const Mission = () => {
  return (
    <section className={styles['mission-container']}>
      <div className={`container ${styles['mission-container-column']}`}>
        <div className={styles['title']}>
          <h3>
            Our mission is to create the most accessible Layer 1 in the crypto industry, prioritizing exceptional user experience, cutting-edge developer tools, and unparalleled DAO transparency.
          </h3>
          <div>
            By empowering emerging markets, we will bridge financial gaps and unlock new economic opportunities, transforming the financial landscape.
          </div>
        </div>
        <div className={styles['statistics']}>
          {statistics.map(statistic => (
            <div key={statistic.title}>
              <div>{statistic.value}</div>
              <div>{statistic.title}</div>
            </div>
          ))}
        </div>
        <Link href="#">
          <Button size="large">Meet the team</Button>
        </Link>
      </div>
      <div className={styles['mission-path']}>
        <Marquee autoFill className={styles['marquee']}>
          <Image src={community1} alt="community" />
          <Image src={community2} alt="community" />
        </Marquee>
      </div>
    </section>
  );
};

export default Mission;
