import styles from '../harbor.module.scss';
import Image from 'next/image';
import Icon1 from '../assets/icon_1.svg';
import Icon2 from '../assets/icon_2.svg';
import Icon3 from '../assets/icon_3.svg';

const infoData = [
  {
    icon: Icon1,
    title: 'Effortless staking',
    description:
      'TStake $AMB tokens and receive stAMB, a liquid staking derivative token, in return.',
  },
  {
    icon: Icon2,
    title: 'Maintain liquidity',
    description:
      'Use $HBR to trade, lend, or borrow while still earning staking rewards.',
  },
  {
    icon: Icon3,
    title: 'Hybrid rewards structure',
    description: 'Earn rewards in $AMB and $BOND.',
  },
];

const InfoBlock = () => (
  <>
    {infoData.map((item, index) => (
      <div className={styles.info} key={index}>
        <Image
          src={item.icon}
          alt="icon"
          width={56}
          height={56}
          className={styles.icon}
        />
        <div className={styles.text}>
          <h3>{item.title}</h3>
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    ))}
  </>
);

export default InfoBlock;
