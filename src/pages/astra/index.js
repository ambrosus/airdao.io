import styles from './astra.module.scss';
import Image from 'next/image';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import chevron from '@/assets/icons/chevron-blue.svg';
import chevronWhite from '@/assets/icons/chevron-white.svg';
import DeviceMockup from './assets/device_mockup.png';
import P2pView from './assets/p2p_view.png';
import AstraLogo from './assets/astra_logo.png';
import InfoBlock from './components/InfoBlock';

export default function Astra({ header, footerText }) {
  return (
    <>
      <HeaderWrapper header={header} showBanner={false} />
      <div className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <span>Astra — </span> <br />
              secure and efficient <br />
              crypto trading
            </h1>
            <div className={styles.cta}>
              <a
                href="https://star-fleet.io/astra/swap?inputCurrency=AMB&outputCurrency=0xFF9F502976E7bD2b4901aD7Dd1131Bb81E5567de"
                target="_blank"
                className={styles.link}
              >
                Trade on Astra now
              </a>
              <a
                href="https://docs.airdao.io/getting-started/ecosystem-products/astra-dex-and-p2p-trading"
                target="_blank"
                className={`${styles.link} ${styles.transparent}`}
              >
                Learn more
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
        <h2 className={styles.title}>Explore Astra DEX features</h2>
        <div className={styles.list}>
          <div className={styles.left}>
            <Image src={P2pView} alt="p2p view" width={460} />
          </div>
          <div className={styles.right}>
            <InfoBlock />
          </div>
        </div>
        <div className={styles.astra}>
          <div className={styles.left}>
            <Image src={AstraLogo} alt="Astra Logo" width={191} height={191} />
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>
              $AST is Astra DEX’s native token, used for staking in single-sided
              pools, earning rewards, & participating in governance within Astra
              & AirDAO.
            </h3>
            <div className={`${styles.cta} ${styles.maxWidth}`}>
              <a
                href="https://star-fleet.io/astra/swap?inputCurrency=AMB&outputCurrency=0x5ceCBde7811aC0Ed86Be11827AE622b89Bc429DF"
                target="_blank"
                className={styles.link}
              >
                Buy $AST token
                <Image
                  src={chevronWhite}
                  alt="arrow right"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://docs.airdao.io/getting-started/ecosystem-products/astra-dex-and-p2p-trading"
                target="_blank"
                className={`${styles.link} ${styles.transparent} ${styles.flexCenter}`}
              >
                Documentation
                <Image src={chevron} alt="arrow right" width={20} height={20} />
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
