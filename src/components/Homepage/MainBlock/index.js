import styles from './main-block.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import {PrismicRichText} from '@prismicio/react';
import shape from './shape.svg';

const MainBlock = ({
  title,
  label,
  partners,
  subtitle,
}) => (
  <section className={`container ${styles['main-block']}`}>
    <Image className={styles.shape} src={shape} alt="shape"/>
    <Image className={`${styles.shape} ${styles['shape-right']}`} src={shape} alt="shape"/>
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
    <PrismicRichText
      field={label}
      components={{
        paragraph: ({ children }) => (
          <BlockLabel className={styles['main-block__label']}>{children}</BlockLabel>
        ),
      }}
    />
    <div className={styles['main-block__partners']}>
      {partners.map((el) => (
        <Image width={52} height={52} key={el.partner.url} src={el.partner.url} alt="partner" />
      ))}
    </div>
  </section>
);

export default MainBlock;