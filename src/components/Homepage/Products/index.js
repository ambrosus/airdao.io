import styles from './products.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export default function Products({ text, cards }) {
  return (
    <section className={styles.products}>
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.products__text}>{children}</p>
          ),
        }}
      />
      <div className={styles.products__cards}>
        {cards.map((card) => (
          <div className={styles.products__card} key={card.name}>
            <div className={styles.products__cardName}>{card.name}</div>
            <PrismicRichText
              field={card.text}
              components={{
                paragraph: ({ children }) => (
                  <h2 className={styles.products__cardText}>{children}</h2>
                ),
                strong: ({ children }) => (
                  <span className={styles.products__cardText_white}>
                    {children}
                  </span>
                ),
              }}
            />
            <div className={styles.products__cardButtons}>
              <PrismicNextLink
                field={card.button_link}
                className={styles.products__button_orange}
              >
                {card.button_text}
              </PrismicNextLink>
              <PrismicNextLink
                field={card.guide_button_link}
                className={styles.products__button_plain}
              >
                {card.guide_button_text}

                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.73271 4.52506C8.03263 4.23937 8.50737 4.2509 8.79306 4.55083L13.7944 9.80129C14.0703 10.091 14.0703 10.5462 13.7944 10.8359L8.79306 16.0863C8.50737 16.3863 8.03263 16.3978 7.73271 16.1121C7.43279 15.8264 7.42125 15.3517 7.70694 15.0518L12.2155 10.3186L7.70694 5.58541C7.42125 5.28548 7.43279 4.81075 7.73271 4.52506Z"
                    fill="#E6E6E6"
                  />
                </svg>
              </PrismicNextLink>
            </div>
            <PrismicNextImage
              field={card.image}
              className={styles.products__cardImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
