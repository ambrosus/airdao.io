import styles from './ambassarods.module.scss';
import BlockLabel from '@/components/BlockLabel';
import ambassador1 from './ambassador-1.png';
import ambassador2 from './ambassador-2.png';
import ambassador3 from './ambassador-3.png';
import ambassador4 from './ambassador-4.png';
import ambassador5 from './ambassador-5.png';
import ambassador6 from './ambassador-6.png';
import ambassador7 from './ambassador-7.png';
import ambassador8 from './ambassador-8.png';
import ambassador9 from './ambassador-9.png';
import chevron from '../../../assets/icons/chevron.svg';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import {PrismicRichText} from '@prismicio/react';
import Link from 'next/link';

const Ambassadors = ({
  label,
  title,
  text,
  images,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => (
  <div className={styles['ambassadors']}>
    <BlockLabel className={styles['ambassadors__label']}>
      AMBASSADORS
    </BlockLabel>
    <h3 className={styles['ambassadors__title']}>
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => <>{children}</>,
          strong: ({ children }) => <span>{children}</span>,
        }}
      />
    </h3>
    <PrismicRichText
      field={text}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['ambassadors__text']}>{children}</p>
        ),
      }}
    />
    <div className={styles['ambassadors__list']}>
      {images.map((el) => (
        <img
          width={96}
          height={85}
          key={el.image.url}
          src={el.image.url}
          alt="ambassador"
        />
      ))}
    </div>
    <div className={styles['ambassadors__btns']}>
      <PrismicRichText
        field={primaryText}
        components={{
          paragraph: ({ children }) => (
            <Link href='/'>
              <Button type="primary" size="large">
                {children}
              </Button>
            </Link>
          ),
        }}
      />
      <PrismicRichText
        field={secondaryText}
        components={{
          paragraph: ({ children }) => (
            <Link href={secondaryLink.url.replace('https://', '')}>
              <Button size="large">
                {children}
                <Image src={chevron} alt="chevron"/>
              </Button>
            </Link>
          ),
        }}
      />
    </div>
  </div>
);

export default Ambassadors;
