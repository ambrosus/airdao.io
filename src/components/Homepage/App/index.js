import styles from './app.module.scss';
import Image from 'next/image';
import appStore from './appstore.svg';
import googlePlay from './googlplay.svg';
import app from './app.svg';
import {PrismicRichText} from '@prismicio/react';
import {asText} from '@prismicio/client';

const App = ({ title, list }) => (
  <div className={`container`}>
    <div className={styles.app}>
      <div className={styles.app__left}>
        <p className={styles.app__title}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <>{children}</>,
              strong: ({ children }) => (
                <span>
                  {children}
                </span>
              ),
            }}
          />
        </p>
        <ul className={styles.app__list}>
          {list.map((el) => (
            <PrismicRichText
              field={el.item}
              components={{
                paragraph: ({ children }) => (
                  <li key={asText(el.item)} className={styles['app__list-item']}>{children}</li>
                ),
              }}
            />
          ))}
        </ul>
        <Image className={styles.app__appstore} src={appStore} alt="app store" />
        <Image className={styles.app__google} src={googlePlay} alt="google play" />
      </div>
      <div className={styles.app__right}>
        <Image src={app} alt="app"/>
      </div>
    </div>
  </div>
);

export default App;
