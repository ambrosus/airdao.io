import styles from '../astra.module.scss';
import Image from 'next/image';
import Icon1 from '../assets/icon_1.svg';
import Icon2 from '../assets/icon_2.svg';
import Icon3 from '../assets/icon_3.svg';
import Icon4 from '../assets/icon_4.svg';

const infoData = [
  {
    icon: Icon1,
    title: 'Liquidity pools & P2P Marketplace',
    description:
      'Trade securely using single-sided or double-sided liquidity pools and direct sales for maximum flexibility and efficiency.',
  },
  {
    icon: Icon2,
    title: 'Innovative lock-and-reward model',
    description:
      '<b>Single-sided liquidity pools:</b> Provide one token to capped pools for higher rewards. <b>Double-sided liquidity pools:</b> Offer uncapped trading with lower rewards.',
  },
  {
    icon: Icon3,
    title: 'Ecosystem rewards',
    description:
      'Earn ecosystem tokens as rewards for proving liquidity to the platform.',
  },
  {
    icon: Icon4,
    title: 'Live price charts',
    description: 'APY and TVL dashboard.',
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
