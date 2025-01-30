import { createClient } from '@/prismicio';
import Image from 'next/image';

import styles from './harbor.module.scss';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import chevron from '@/assets/icons/chevron-blue.svg';
import arrowAmb from './assets/arrow-amb.svg';
import fireImg from './assets/fire.svg';
import InfoBlock from './components/InfoBlock';
import QuestionMark from './assets/question_mark.svg';
import AirDaoToken from './assets/token.svg';
import Accordion from './components/Accordion';

export default function Harbor({ header, footerText }) {
  return (
    <>
      <HeaderWrapper header={header} showBanner={false} />
      <div className={styles.hero}>
        <div className={styles.gradientElements}>
          <div className={styles.gradientElement1}></div>
          <div className={styles.gradientElement2}></div>
          <div className={styles.gradientElement3}></div>
        </div>

        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <span>Stake, earn</span> <br />
              and stay liquid
            </h1>
            <h3 className={styles.subTitle}>
              Harbor is AirDAO&apos;s liquid staking platform, which makes it
              easy for users to stake their tokens and earn reward, while still
              being able to use their staked tokens.
            </h3>
            <div className={styles.buttons}>
              <a
                href="https://star-fleet.io/harbor/liquid-staking/"
                target="_blank"
                className={styles.link}
              >
                Start with Harbor
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
            <div className={styles.statsCards}>
              <div className={`${styles.statsCard} ${styles.active}`}>
                <Image
                  src={fireImg}
                  className={styles.topImage}
                  width={200}
                  alt="fire"
                />
                <div className={styles.statsContent}>
                  <h4 className={styles.statsValue}>
                    Up to 35% APY <span>🔥</span>
                  </h4>
                  <p className={styles.statsLabel}>Unlock high-yield reward</p>
                </div>
              </div>

              <div className={styles.statsCard}>
                <div className={styles.statsInner}>
                  <Image
                    src={arrowAmb}
                    alt="arrow amb"
                    width={60}
                    height={60}
                  />
                  <div className={styles.statsContent}>
                    <h4 className={styles.statsValue}>338M AMB</h4>
                    <div className={styles.statsLabel}>
                      Total Staked on Harbor
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.statsCard} ${styles.last}`}>
                <div className={styles.statsContent}>
                  <h4 className={styles.statsValue}>$2.15M</h4>
                  <div className={styles.statsLabel}>Total Value Locked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <h2 className={styles.title}>Explore Harbor features</h2>
        <div className={styles.list}>
          <div className={styles.left}>
            <div className={styles.leftTik}>
              <div className={styles.stakingTitle}>
                <h3>Stake AirDAO</h3>
                <h4>Stake AMB and receive stAMB while staking</h4>
              </div>
              <div className={styles.stakingHolder}>
                <div className={styles.stakingInfo}>
                  <div className={styles.gridItem}>
                    <span className={styles.label}>Available to Stake</span>
                    <span className={styles.value}>234.89k AMB</span>
                  </div>
                  <div className={styles.gridItem}>
                    <span className={styles.label}>Total Staked on Harbor</span>
                    <span className={styles.value}>
                      338m
                      <span>$20,9417.34</span>
                    </span>
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
                    <span className={`${styles.value} ${styles.green}`}>
                      21% 🔥
                    </span>
                  </div>
                </div>
                <div className={styles.tabs}>
                  <span className={styles.active}>Stake</span>
                  <span>Withdraw</span>
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <InfoBlock />
          </div>
        </div>
      </div>
      <div className={styles.ctaHolder}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLines}>
            {[...Array(19)].map((_, i) => (
              <div
                key={i}
                className={styles.ctaLine}
                style={{
                  background:
                    i % 2 === 0
                      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0.3%, rgba(0, 0, 0, 0) 30%, rgba(255, 255, 255, 0.45))'
                      : 'linear-gradient(to bottom, rgb(255, 238, 82), rgb(255, 238, 82))',
                }}
              />
            ))}
          </div>
          <div className={styles.cta}>
            <Image
              src={fireImg}
              className={styles.topImage}
              width={200}
              alt="fire"
            />
            <h3>
              <b>Unlock 35% APY</b> on $AMB staking <b>by staking $HBR,</b>
              {''} Harbor’s native token
            </h3>
            <div className={styles.buttons}>
              <a
                href="https://star-fleet.io/harbor/liquid-staking/stake-hbr"
                target="_blank"
                className={styles.link}
              >
                Stake now
              </a>
              <a
                href="https://star-fleet.io/astra/swap?inputCurrency=AMB&outputCurrency=0xd09270E917024E75086e27854740871F1C8E0E10"
                target="_blank"
                className={`${styles.link} ${styles.transparent}`}
              >
                Buy $HBR token
                <Image src={chevron} alt="arrow right" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* <div className={styles.left}>
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
                exclusive liquid staking pools, governance of the platforms
                yields and fees and lending and access to lending features.
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
            </div> */}
        </div>
        <div>
          <h4>FAQs</h4>
          <Accordion />
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
