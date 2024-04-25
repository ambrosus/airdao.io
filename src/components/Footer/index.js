import styles from './footer.module.scss';
import Image from 'next/image';
import { asText } from '@prismicio/client';

import Events from './components/Events';
import Contact from './components/Contact';
import { switchText } from './utils';

const Footer = ({ data, footerBlock, className = '' }) => {
  const slices = data.slices;
  const socials = data.footer_social;
  const downloadapp = data.downloadapp;

  const block = () => {
    switch (footerBlock) {
      case 'footer_events':
        return <Events />;
      case 'footer_contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footer__inner}>
        {block()}
        <div className={styles.footer__lists}>
          {slices.map((el, i) => (
            <ul key={i} className={styles.footer__list}>
              {el.items.map((item, index) => (
                <>
                  <li
                    key={asText(item.footer_item_text)}
                    className={
                      styles[
                        item.footer_item_is_title
                          ? 'footer__lists-title'
                          : 'footer__lists-item'
                      ]
                    }
                  >
                    {item.footer_item_is_title ? (
                      asText(item.footer_item_text)
                    ) : (
                      <a
                        id="footer_link"
                        href={item.footer_item_url.url}
                        target={item.footer_item_url.target}
                        {...(item.footer_item_url?.url?.includes(
                          'https://airdao.io',
                        )
                          ? { rel: 'nofollow' }
                          : {})}
                      >
                        {asText(item.footer_item_text)}
                      </a>
                    )}
                    {item.footer_item_is_soon && (
                      <span className={styles['footer__lists-soon']}>
                        COMING SOON
                      </span>
                    )}
                    {i === 3 && index === el.items.length - 1 && (
                      <ul className={styles['footer__lists-links']}>
                        {downloadapp.map(item => (
                          <li key={item.imageurl.alt}>
                            <a
                              href={item.linkurl.url}
                              target={item.linkurl.target}
                            >
                              {switchText(item.imageurl.alt)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </>
              ))}
            </ul>
          ))}
        </div>
        <div className={styles.footer__socials}>
          {socials.map((el, i) => (
            <a
              key={i}
              href={el.footer_social_link.url}
              target={el.footer_social_link.target}
              rel="nofollow"
            >
              <Image
                src={el.footer_social_img.url}
                width="32"
                height="32"
                alt="social"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
