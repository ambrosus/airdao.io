import styles from './proposals.module.scss';
import Button from '@/components/Button';
import proposalIcon from './proposal-icon.svg';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

export default function Proposals({ heading, lead, proposals, snapshot }) {
  return (
    <div className={styles.container}>
      <div className={'container'}>
        <div className={styles.block}>
          <div className={styles.label}>GOVERNANCE</div>
          <div className={styles.text}>
            <PrismicRichText
              field={heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className={styles.heading}>{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={lead}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.paragraph}>{children}</p>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.row}>
          <h3 className={styles.prop_heading}>Recent proposals</h3>
          <PrismicNextLink field={snapshot} className={styles.hide_mobile}>
            <Button size={'large'} type={'tetiary'} className={styles.button}>
              See all votes
            </Button>
          </PrismicNextLink>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.card_first}`}>
            <Image
              src={proposalIcon}
              alt={'proposal icon'}
              className={styles.icon}
            />
            <h3 className={styles.card_heading}>
              Suggest <br />
              your proposal
            </h3>
          </div>

          {proposals.map((proposal) => (
            <Proposal
              key={proposal.id}
              active={proposal.active}
              date={proposal.date}
              content={proposal.content}
              link={proposal.link}
            />
          ))}

          <PrismicNextLink field={snapshot} className={styles.hide_desktop}>
            <Button size={'large'} type={'tetiary'} className={styles.button}>
              See all votes
            </Button>
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
}

function Proposal({ active, date, content, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.card_status}>Closed</div>
        <div className={styles.card_date}>Ended 1 month ago</div>
      </div>
      <PrismicRichText
        field={content}
        components={{
          heading3: ({ children }) => (
            <div className={styles.card_title}>{children}</div>
          ),
          paragraph: ({ children }) => (
            <div className={styles.card_description}>{children}</div>
          ),
        }}
      />
    </div>
  );
}
