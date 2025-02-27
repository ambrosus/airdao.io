import styles from './app.module.scss';
import Image from 'next/image';
import appStore from './appstore.svg';
import googlePlay from './googlplay.svg';
import app from './app.svg';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/client';
import Link from 'next/link';

const App = ({ title, list, appstore, google }) => (
  <div className={`container`}>
    <div className={styles.app}>
      <div className={styles.app__left}>
        <p className={styles.app__title}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <>{children}</>,
              strong: ({ children }) => <span>{children}</span>,
            }}
          />
        </p>
        <ul className={styles.app__list}>
          {list.map(el => (
            <PrismicRichText
              field={el.item}
              key={asText(el.item)}
              components={{
                paragraph: ({ children }) => (
                  <li className={styles['app__list-item']}>{children}</li>
                ),
              }}
            />
          ))}
        </ul>
        {google && (
          <>
            <Link
              href={appstore.url}
              target={appstore.target}
              className={styles.app__link}
              rel="nofollow"
            >
              <Image
                className={styles.app__appstore}
                src={appStore}
                alt="app store"
              />
            </Link>
            <Link
              href={google.url}
              target={google.target}
              className={styles.app__link}
              rel="nofollow"
            >
              <Image
                className={styles.app__google}
                src={googlePlay}
                alt="google play"
              />
            </Link>
          </>
        )}
      </div>
      <div className={styles.app__right}>
        <Image src={app} alt="app" />
      </div>
    </div>
  </div>
);

export default App;
