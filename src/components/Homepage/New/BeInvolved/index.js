import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import governor from '@/assets/img/homepage/be-involved/governor.svg';
import burn from '@/assets/img/homepage/be-involved/burn.svg';
import ambassadors from '@/assets/img/homepage/be-involved/ambassadors.svg';
import governorMobile from '@/assets/img/homepage/be-involved/governor-mobile.svg';
import styles from './be-involved.module.scss';

// TODO: add texts from prismic
const BeInvolved = () => {
  return (
    <section className={styles['be-involved-container']}>
      <div className="container">
        <div className={styles['title']}>
          <div>Be Involved</div>
          <h2>Play a part in shaping AirDAO’s future</h2>
        </div>
        <div className={styles['blocks']}>
          <div>
            <div className={styles['block-title-description']}>
              <h3>Step into web3’s most thriving community</h3>
              <div>
                Engage in discussions, follow our socials, and be a part of the AirDAO revolution.
              </div>
            </div>
            <div>Socials</div>
          </div>
          <div>
            <div>
              <Image
                src={governor}
                alt="governor"
                className={styles['desktop-governor']}
              />
              <Image
                src={governorMobile}
                alt="governor"
                className={styles['mobile-governor']}
              />
              <div className={styles['block-title-description']}>
                <h3>Collect your first SBT and govern AirDAO ecosystem</h3>
                <div>
                  We aim for transparent on-chain governance, ensuring every AirDAO community member has voting rights and governance power according to their engagement via AirDAO Governor SBT
                </div>
                <Link href="#">
                  <Button
                    type="tetiary"
                    size="large"
                    className={styles['button']}
                  >
                    Become a Governor
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className={styles['block-title-description']}>
                <h3>Follow AirDAO events</h3>
                <div>
                  Don`t miss out on AirDAO events. Set a reminder on your calendar and stay updated. Your involvement is the key to success.
                </div>
                <Link href="#">
                  <Button
                    type="tetiary"
                    size="large"
                    className={styles['button']}
                  >
                    Become a Governor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={ambassadors} alt="ambassadors" />
              <div className={styles['block-title-description']}>
                <h3>Become an AirDAO Ambassador</h3>
                <div>
                  We support and value individuals from diverse backgrounds eager to spread the word about AirDAO ecosystem.
                </div>
                <Link href="#">
                  <Button
                    type="tetiary"
                    size="large"
                    className={styles['button']}
                  >
                    Become an ambassador
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Image src={burn} alt="burn" />
              <div className={styles['block-title-description']}>
                <h3>Burn AMB</h3>
                <div>
                  Deflation model reduces supply and supports AMB`s price.
                </div>
                <Link href="#">
                  <Button type="plain" size="large">Burn AMB</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeInvolved;
