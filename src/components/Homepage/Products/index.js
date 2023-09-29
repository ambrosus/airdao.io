import BlockLabel from '@/components/BlockLabel';
import { Button } from '@airdao/ui-library';
import styles from './products.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/client';
import Link from 'next/link';

const Products = ({ title, products }) => (
  <section className="container">
    <p className={styles.products__title}>
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => <>{children}</>,
          strong: ({ children }) => <span>{children}</span>,
        }}
      />
    </p>
    <div className={styles.products}>
      {products.map((el) => (
        <div key={asText(el.label)} className={styles['product']}>
          <div>
            <PrismicRichText
              field={el.label}
              components={{
                paragraph: ({ children }) => (
                  <BlockLabel>{children}</BlockLabel>
                ),
              }}
            />
            <PrismicRichText
              field={el.title}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles['product__title']}>{children}</p>
                ),
              }}
            />
            <PrismicRichText
              field={el.primary_text}
              components={{
                paragraph: ({ children }) => (
                  <Link href={el.primary_link.url.replace('https://', '')}>
                    <Button
                      type="secondary"
                      size="large"
                      className={styles['product__btn']}
                    >
                      {children}
                    </Button>
                  </Link>
                ),
              }}
            />
            <PrismicRichText
              field={el.secondary_text}
              components={{
                paragraph: ({ children }) => (
                  <Link href={el.secondary_link.url}>
                    <Button type="tetiary" size="large">
                      {children}
                    </Button>
                  </Link>
                ),
              }}
            />
          </div>
          <img src={el.image.url} alt="staking" />
        </div>
      ))}
    </div>
  </section>
);

export default Products;
