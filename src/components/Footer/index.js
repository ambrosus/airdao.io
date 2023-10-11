import styles from './footer.module.scss';
import Image from 'next/image';
import { asText } from '@prismicio/client';
import Events from './components/Events';
import Contact from './components/Contact';
const Footer = ({
  slices,
  socials,
  mobileLink,
  mobileLinkText,
  mobileText,
  footerBlock,
}) => {
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
  console.log(slices);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        {block()}
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
                    <a href={item.footer_item_url.url}>
                      {asText(item.footer_item_text)}
                    </a>
                  )}
                  {item.footer_item_is_soon && (
                    <span className={styles['footer__lists-soon']}>
                      COMING SOON
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={styles.footer__socials}>
          {socials.map((el, i) => (
            <a key={i} href={el.footer_social_link.url}>
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
