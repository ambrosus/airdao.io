import styles from './council.module.scss';
import Button from '@/components/Button';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import twitterIcon from '@/assets/icons/twitter.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import Link from 'next/link';

export default function Council({ heading, text, council }) {
  return (
    <div className={`container ${styles.container}`}>
      <PrismicRichText
        field={heading}
        components={{
          heading2: ({ children }) => (
            <h2 className={styles.heading}>{children}</h2>
          ),
        }}
      />
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <div className={styles.description}>{children}</div>
          ),
        }}
      />
      <div className={styles.cards}>
        {council.map((member) => (
          <TeamCard
            key={member.id}
            avatar={member.avatar}
            name={member.name}
            position={member.position}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>
      <Link href={'/team'}>
        <Button className={styles.button} size={'medium'}>
          See Operational team
        </Button>
      </Link>
    </div>
  );
}

function TeamCard({ avatar, name, position, twitter, linkedin }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar_container}>
        <PrismicNextImage field={avatar} className={styles.avatar} />
      </div>
      <PrismicRichText
        components={{
          heading3: ({ children }) => (
            <h3 className={styles.name}>{children}</h3>
          ),
        }}
        field={name}
      />
      <PrismicRichText
        components={{
          paragraph: ({ children }) => (
            <p className={styles.position}>{children}</p>
          ),
        }}
        field={position}
      />
      <div className={styles.socials}>
        {twitter.url && (
          <PrismicNextLink field={twitter}>
            <img {...twitterIcon} alt={'twitter'} />
          </PrismicNextLink>
        )}
        {linkedin.url && (
          <PrismicNextLink field={linkedin}>
            <img {...linkedinIcon} alt={'twitter'} />
          </PrismicNextLink>
        )}
      </div>
    </div>
  );
}
