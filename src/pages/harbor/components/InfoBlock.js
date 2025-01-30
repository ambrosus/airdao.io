import styles from '../harbor.module.scss';
import Icon1 from './Icon1';
import Icon2 from './Icon2';
import Icon3 from './Icon3';

const infoData = [
  {
    icon: <Icon1 />,
    title: 'Effortless staking',
    description: (
      <span>
        <b>Stake $AMB</b> tokens and receive stAMB, a liquid staking derivative
        token, in return. <b>Stake $HBR</b> to maximize $AMB Yield.
      </span>
    ),
  },
  {
    icon: <Icon2 />,
    title: 'Maintain liquidity',
    description: <span>Use $HBR while still earning staking rewards.</span>,
  },
  {
    icon: <Icon3 />,
    title: 'Hybrid rewards structure',
    description: <span>Earn rewards in $AMB and $BOND.</span>,
  },
];

const InfoBlock = () => (
  <>
    {infoData.map((item, index) => (
      <div className={styles.info} key={index}>
        {item.icon}
        <div className={styles.text}>
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </div>
      </div>
    ))}
  </>
);

export default InfoBlock;
