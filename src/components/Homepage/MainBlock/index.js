import BlockLabel from '@/components/BlockLabel';
import { PrismicRichText } from '@prismicio/react';
import styles from './main-block.module.scss';
import { Button } from '@airdao/ui-library';
import Link from 'next/link';

import ChevronIcon from '@/components/Icons/ChevronIcon';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const MainBlock = ({
  title,
  label,
  partners,
  subtitle,
  showBanner = false,
}) => (
  <section
    className={`container ${styles['main-block']}`}
    style={{ marginTop: showBanner ? -80 : 0 }}
  >
    <PrismicRichText
      field={title}
      components={{
        paragraph: ({ children }) => (
          <h1 className={styles['main-block__title']}>{children}</h1>
        ),
      }}
    />
    <PrismicRichText
      field={subtitle}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['main-block__subtitle']}>{children}</p>
        ),
      }}
    />
    <Link className={styles['main-block__link']} href="/gov-portal">
      <Button type="primary" size="large">
        Join AirDAO
        <ChevronIcon />
      </Button>
    </Link>
    <PrismicRichText
      field={label}
      components={{
        paragraph: ({ children }) => (
          <BlockLabel className={styles['main-block__label']}>
            {children}
          </BlockLabel>
        ),
      }}
    />
    <div className={styles['main-block__partners-wrapper']}>
      <div className={styles['main-block__partners']}>
        {partners.map(el => (
          <img
            className={styles['main-block__partner']}
            width={52}
            height={52}
            key={el.partner.url}
            src={el.partner.url}
            alt="partner"
          />
        ))}
        {partners.map(el => (
          <img
            className={styles['main-block__partner']}
            width={52}
            height={52}
            key={el.partner.url}
            src={el.partner.url}
            alt="partner"
          />
        ))}
      </div>
    </div>
  </section>
);

export default MainBlock;
