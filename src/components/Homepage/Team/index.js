import styles from './team.module.scss';
import { Button } from '@airdao/ui-library';
import Image from 'next/image';
import teamImg from './team.png';

const Team = () => (
  <div className={styles['team']}>
    <div className={`container ${styles['team__wrapper']}`}>
      <div className={styles['team__left']}>
        <h3 className={styles['team__title']}>
          More than <span>30 people</span> worldwide working for the AirDAO community
        </h3>
        <Button size="large" type="primary">
          Meet the team
        </Button>
      </div>
      <div className={styles['team__right']}>
        <Image src={teamImg} alt="team" className={styles['team__img']} />
      </div>
    </div>
  </div>
);

export default Team;
