import styles from './harbor.module.scss';
import Image from 'next/image';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import chevron from '@/assets/icons/chevron-blue.svg';
import chevronWhite from '@/assets/icons/chevron-white.svg';
import DeviceMockup from './assets/device_mockup.png';
import HarborLogo from './assets/harbor_logo.png';
import InfoBlock from './components/InfoBlock';
import QuestionMark from './assets/question_mark.svg';
import AirDaoToken from './assets/token.svg';

export default function Harbor({ header, footerText }) {
  return (
    <>
      <HeaderWrapper header={header} showBanner={false} />
      <div className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <span>Stake, earn</span> <br />
              and stay liquid
            </h1>
            <h3 className={styles.subTitle}>
              Harbor is AirDAO’s liquid staking platform, allowing users to earn
              rewards while maintaining token utility.
            </h3>
            <div className={styles.cta}>
              <a
                href="https://star-fleet.io/harbor/liquid-staking/"
                target="_blank"
                className={styles.link}
              >
                Start with Harbor now
              </a>
              <a
                href="https://docs.airdao.io/getting-started/ecosystem-products/harbor-liquid-staking"
                target="_blank"
                className={`${styles.link} ${styles.transparent}`}
              >
                Product guide
                <Image src={chevron} alt="arrow right" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={DeviceMockup} alt="device view" width={342} />
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <h2 className={styles.title}>Explore Harbor features</h2>
        <div className={styles.list}>
          <div className={styles.left}>
            <div className={styles.stakingTitle}>
              <h3>Stake AirDAO</h3>
              <h4>Stake AMB and receive stAMB while staking</h4>
            </div>
            <div className={styles.stakingInfo}>
              <div className={styles.gridItem}>
                <span className={styles.label}>Available to Stake</span>
                <span className={styles.value}>234.89k AMB</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Total Staked on Harbor</span>
                <span className={styles.value}>34.5m AMB</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>My Staked Amount</span>
                <span className={styles.value}>1.2k stAMB</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>
                  Harbor APR
                  <Image
                    src={QuestionMark}
                    alt="Question Mark icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className={`${styles.value} ${styles.green}`}>8.89%</span>
              </div>
            </div>
            <div className={styles.inputMockup}>
              <div className={styles.input}>
                <Image
                  src={AirDaoToken}
                  alt="AirDao Token icon"
                  width={24}
                  height={24}
                />
                <span className={styles.min}>MIN 1000</span>
                <span className={styles.max}>MAX</span>
              </div>
              <div className={styles.stake}>Stake</div>
            </div>
          </div>
          <div className={styles.right}>
            <InfoBlock />
          </div>
        </div>

        <div className={styles.harbor}>
          <div className={styles.left}>
            <Image
              src={HarborLogo}
              alt="Harbor Logo"
              width={191}
              height={191}
            />
          </div>
          <div className={styles.right}>
            <p className={styles.text}>
              $HBR is harbors utility tokens allowing users to participate in
              exclusive liquid staking pools, governance of the platforms yields
              and fees and lending and access to lending features.
            </p>
            <div className={`${styles.cta} ${styles.maxWidth}`}>
              <a
                href="https://star-fleet.io/astra/swap?inputCurrency=AMB&outputCurrency=0xd09270E917024E75086e27854740871F1C8E0E10"
                target="_blank"
                className={styles.link}
              >
                Buy $HBR token
                <Image
                  src={chevronWhite}
                  alt="arrow right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer data={footerText.data} className={styles.footer} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: {
      header,
      footerText: footer,
    },
  };
}
