import styles from './roles.module.scss';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

const Roles = ({ title, text, primaryText, list, primaryLink }) =>
  title && (
    <div className={styles.roles}>
      <div className="container">
        <PrismicRichText
          field={title}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.roles__title}>{children}</p>
            ),
          }}
        />
        <div className={styles.roles__list}>
          {list.map(el => (
            <div key={el.image.url} className={styles.roles__item}>
              <img src={el.image.url} alt="role" />
              <PrismicRichText
                field={el.title}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles['roles__item-title']}>{children}</p>
                  ),
                }}
              />
              <PrismicRichText
                field={el.text}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles['roles__item-text']}>{children}</p>
                  ),
                }}
              />
            </div>
          ))}
        </div>
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.roles__subtext}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={primaryText}
          components={{
            paragraph: ({ children }) => (
              <Link href={primaryLink.url} target="_blank" rel="nofollow">
                <Button type="secondary" size="large">
                  {children}
                </Button>
              </Link>
            ),
          }}
        />
      </div>
    </div>
  );

export default Roles;
