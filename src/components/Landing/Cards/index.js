import React from 'react';
import Link from 'next/link';

import { Button } from '@airdao/ui-library';
import styles from './cards.module.scss';
import CardsIcon from '@/components/Icons/CardsIcon';
import RoleIcon from '@/components/Icons/RoleIcon';
import TokenIcon from '@/components/Icons/TokenIcon';
import Step1Bg from '@/components/Icons/Step1Bg';
import Step4Bg from '@/components/Icons/Step4Bg';
import ChevronIcon from '@/components/Icons/ChevronIcon';

const SingleCard = ({ className, id, children, title, icon }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
      {/* <div className={styles.topOverlay} />
      <div className={styles.bottomOverlay} /> */}
      <div className={styles.icon}>{icon}</div>
      {id === '1' && <div className={styles.customBg}>{/* <Step1Bg /> */}</div>}
      {id === '4' && <div className={styles.customBg}>{/* <Step4Bg /> */}</div>}
    </div>
  );
};

const Cards = () => {
  return (
    <div className={styles.cards}>
      <SingleCard
        id="1"
        title="Decentralized identifier — keep your privacy and stay secure"
      >
        <p>
          We use Fractal ID to create a secure decentralized identifier (DID)
          for governance, authenticating your unique individuality without
          revealing personal data or identity (KYC).
        </p>
        <Link href="/academy/how-to-verify-your-identity-using-fractal-id">
          <Button size="large" type="tetiary">
            Learn more about Fractal ID
            <ChevronIcon />
          </Button>
        </Link>
      </SingleCard>
      <SingleCard
        id="2"
        title="Collect your first SBT to become AirDAO Governor"
        icon={<TokenIcon />}
      >
        <p>
          The issuance of the AirDAO Governor SBT will be based on facial
          recognition using your biometric data, verified by Fractal ID.
        </p>
      </SingleCard>
      <SingleCard
        id="3"
        title="Let your role define your voting power"
        icon={<RoleIcon />}
      >
        <p>
          Your engagement matters! The governance voting power will be based on
          your activities and influence in the DAO and Ecosystem.
        </p>
      </SingleCard>
      <SingleCard id="4" title="Impact and decision making">
        <p>
          The more impact you make, the more powerful your weight is in
          decision-making. As the AirDAO governor, you can collect various
          impact-based SBTs, increasing your voting power.
        </p>
        {/* <Button size="large" type="tetiary">
          Get started
        </Button> */}
        <Link href="https://airdao.io/academy#governance">
          <Button size="large" type="primary">
            Learn more
            <ChevronIcon />
          </Button>
        </Link>
      </SingleCard>
      <SingleCard
        id="5"
        title="Recognition of Diverse contributions"
        icon={<CardsIcon />}
        className={styles.lastGrid}
      >
        <p>
          Whether you serve as a Validator or OG, Ambassador or marketer,
          influencer or builder, partner or auditor, developer or any other
          role, you will be awarded governance SBTs corresponding to the
          benefits you contribute to AirDAO and its prosperity.
        </p>
      </SingleCard>
    </div>
  );
};

export default Cards;
