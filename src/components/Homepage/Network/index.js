import Image from 'next/image';
import styles from './network.module.scss';
import { PrismicRichText } from '@prismicio/react';

const Network = ({ smallTitle, title, list }) => {
  return (
    <section className={styles['network-container']}>
      <div className="container">
        <div className={styles['title']}>
          <PrismicRichText
            field={smallTitle}
            components={{
              paragraph: ({ children }) => <div>{children}</div>,
            }}
          />
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <h2>{children}</h2>,
            }}
          />
        </div>
        <div className={styles['details']}>
          {list.map(item => {
            const title = item.network_item_title[0].text;
            const value = item.network_item_value[0]?.text;
            const icon = item.network_item_icon?.url || null;

            return (
              <div key={title} className={styles['detail']}>
                <span>
                  {icon && (
                    <Image src={icon} alt={title} width={25} height={25} />
                  )}
                  {value && <span className={styles['value']}>{value}</span>}
                  <span className={styles['value-title']}>{title}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Network;
