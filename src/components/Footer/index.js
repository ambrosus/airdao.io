import styles from './footer.module.scss';
import Image from 'next/image';
import phones from './phones.png';
import { asText } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

const Footer = ({
  slices,
  socials,
  mobileLink,
  mobileLinkText,
  mobileText,
}) => (
  <footer className={styles.footer}>
    <div className={styles.footer__inner}>
      <div className={styles['footer-app']}>
        <span className={styles['footer-app__title']}>
          <PrismicRichText
            field={mobileText}
            components={{
              paragraph: ({ children }) => <p>{children}</p>,
              strong: ({ children }) => (
                <span className={styles['footer-app__title-span']}>
                  {children}
                </span>
              ),
            }}
          />
        </span>
        <a href={mobileLink.url}>
          <button className={styles['footer-app__btn']}>
            {asText(mobileLinkText)}
          </button>
        </a>
        <div className={styles['footer-app__img']}>
          <Image src={phones} alt="mobile app" />
        </div>
      </div>
      <div className={styles.footer__lists}>
        {slices.map((el, i) => (
          <ul key={i} className={styles.footer__list}>
            {el.items.map((item, j) => (
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
                  <a href={asText(item.footer_item_url)}>
                    {asText(item.footer_item_text)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={styles.footer__socials}>
        {socials.map((el, i) => (
          <a key={i} href={asText(el.footer_social_img)}>
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

export default Footer;
