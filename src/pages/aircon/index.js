import { Button } from '@airdao/ui-library';
import styles from './aircon.module.scss';
import hero_title from './hero__title.svg';
import location from './location.svg';
import calendar from './calendar.svg';
import logo from './airdao.svg';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import { useEffect, useState } from 'react';

const getTimeRemaining = (targetDate) => {
  const targetDateTime = new Date(targetDate);
  const currentTime = new Date();
  let timeDifference = targetDateTime - currentTime;
  if (timeDifference < 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  timeDifference -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  timeDifference -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(timeDifference / (1000 * 60));
  timeDifference -= minutes * (1000 * 60);

  const seconds = Math.floor(timeDifference / 1000);

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  };
};

const Aircon = ({page}) => {
  console.log(page);
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div className={`${styles.container} ${styles.heading__container}`}>
          <PrismicRichText
            field={page.heading_text}
            components={{
              paragraph: ({ children }) => (
                <span className={styles.heading__text}>{children}</span>
              ),
            }}
          />
          <PrismicNextLink field={page.heading_register_url} className={styles.heading__btn}>
            <PrismicRichText
              field={page.heading_register_text}
              components={{
                paragraph: ({ children }) => (
                  <Button size="medium" type="tetiary" className={styles.heading__btn}>
                    {children}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#29292D">
                      <path
                        d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
                        fill="#29292D" />
                    </svg>
                  </Button>
                ),
              }}
            />
          </PrismicNextLink>
          {page.heading_socials.map((el) => (
            <PrismicNextLink key={el.img.url} field={el.link} className={styles.heading__social}>
              <img src={el.img.url} alt="twitter" />
            </PrismicNextLink>
          ))}
        </div>
      </div>
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <img src={hero_title.src} className={styles.hero__title} alt="hero title" />
        <PrismicRichText
          field={page.hero_text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.hero__text}>
                {children}
              </p>
            ),
          }}
        />
        <div className={styles.locations}>
          <div>
            <img className={styles.location_img} src={location.src} alt="location" />
            <PrismicRichText
              field={page.hero_location}
              components={{
                paragraph: ({ children }) => (
                  <span className={styles.location}>{children}</span>
                ),
              }}
            />
          </div>
          <div>
            <img className={styles.location_img} src={calendar.src} alt="location" />
            <PrismicRichText
              field={page.hero_date}
              components={{
                paragraph: ({ children }) => (
                  <span className={styles.location}>{children}</span>
                ),
              }}
            />
          </div>
        </div>
      </section>
      <div className={styles.hr}>
        <div className={styles.hr__inner} />
      </div>
      <section className={`${styles.expect} ${styles.container}`}>
        <PrismicRichText
          field={page.expect_title}
          components={{
            paragraph: ({ children }) => (
              <h2 className={styles.title}>{children}</h2>
            ),
          }}
        />
        <div className={styles.expect__list}>
          {page.expect_list.map((el, i) => (
            <div key={i} className={styles.expect__item}>
              <PrismicRichText
                field={el.title}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles.expect__label}>{children}</p>
                  ),
                }}
              />
              <PrismicRichText
                field={el.text}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles.expect__text}>{children}</p>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.about}>
        <PrismicRichText
          field={page.about_title}
          components={{
            paragraph: ({ children }) => (
              <h2 className={styles.title}>{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={page.about_text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.about__text}>{children}</p>
            ),
          }}
        />
        <div className={styles.about__btns}>
          <PrismicNextLink field={page.about_primary_link}>
            <PrismicRichText
              field={page.about_primary_text}
              components={{
                paragraph: ({ children }) => (
                  <Button size={'large'} type={'primary'}>{children}</Button>),
              }}
            />
          </PrismicNextLink>
          <PrismicNextLink field={page.about_secondary_link}>
            <PrismicRichText
              field={page.about_secondary_text}
              components={{
                paragraph: ({ children }) => (
                  <Button size={'large'} type={'tetiary'} className={styles.about__btn}>
                    {children}
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path
                        d="M8.23271 4.20694C8.53263 3.92125 9.00737 3.93279 9.29306 4.23271L14.2944 9.48318C14.5703 9.77285 14.5703 10.2281 14.2944 10.5178L9.29306 15.7682C9.00737 16.0681 8.53263 16.0797 8.23271 15.794C7.93279 15.5083 7.92125 15.0336 8.20694 14.7336L12.7155 10.0005L8.20694 5.26729C7.92125 4.96737 7.93279 4.49264 8.23271 4.20694Z"
                        fill="#29292D" />
                    </svg>
                  </Button>
                ),
              }}
            />
          </PrismicNextLink>
        </div>
      </section>
      <section className={styles.partners}>
        <PrismicRichText
          field={page.partners_title}
          components={{
            paragraph: ({ children }) => (
              <h2 className={styles.title}>{children}</h2>
            ),
          }}
        />
        <div className={styles.partners__wrapper}>
          <div className={styles.parnters__list}>
            {page.partners_list.map((el, i) => (
              <div className={styles.partners__item} key={i}>
                <div className={styles.logo_wrapper}>
                  <img src={el.icon.url} alt="airdao" className={styles.partners__logo} />
                </div>
                <PrismicRichText
                  field={el.title}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={styles.partners__title}>{children}</p>
                    ),
                  }}
                />
                <PrismicRichText
                  field={el.text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={styles.partners__text}>{children}</p>
                    ),
                  }}
                />
                <PrismicNextLink field={el.learn_link} className={styles.partners__link}>
                  Learn more
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.67021 4.20694C8.97013 3.92125 9.44487 3.93279 9.73056 4.23271L14.7319 9.48318C15.0078 9.77285 15.0078 10.2281 14.7319 10.5178L9.73056 15.7682C9.44487 16.0681 8.97013 16.0797 8.67021 15.794C8.37029 15.5083 8.35875 15.0336 8.64444 14.7336L13.153 10.0005L8.64444 5.26729C8.35875 4.96737 8.37029 4.49264 8.67021 4.20694Z"
                      fill="#3668DD" />
                  </svg>
                </PrismicNextLink>
              </div>
            ))}
            <div style={{width: 1, padding: 1}}/>
          </div>
        </div>
      </section>
      <section className={styles.register}>
        <PrismicRichText
          field={page.register_label}
          components={{
            paragraph: ({ children }) => (
              <span className={styles.register__label}>{children}</span>
            ),
          }}
        />
        <PrismicRichText
          field={page.register_title}
          components={{
            paragraph: ({ children }) => (
              <h2 className={styles.register__title}>{children}</h2>
            ),
          }}
        />
        <Timer registerDate={page.register_date}/>
        <PrismicNextLink field={page.register_btn_url}>
          <PrismicRichText
            field={page.register_btn_text}
            components={{
              paragraph: ({ children }) => (
                <Button size="large" type="secondary" className={styles.register__btn}>{children}</Button>
              )
            }}
          />
        </PrismicNextLink>
      </section>
      <footer className={`${styles.footer}`}>
        <div className={styles.footer__wrapper}>
          <a href="mailto:aircon@airdao.io" className={styles.footer__mail}>
            aircon@airdao.io
          </a>
          <div className={styles.footer__location}>
            <img src={location.src} alt="location" />
            <PrismicRichText
              field={page.hero_location}
              components={{
                paragraph: ({ children }) => (
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Civic+Centre+Lagos+Nigeria"
                    target="_blank"
                    className={styles.footer__geo}
                  >
                    {children}
                  </a>
              ),
            }}
          />
        </div>
          <div className={styles.footer__socials}>
            {page.footer_right.map((el, i) => (
              <PrismicNextLink field={el.link} key={i}>
                <img src={el.img.url} alt="" />
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
};

const Timer = ({ registerDate }) => {
  const [timerData, setTimerData] = useState({});

  useEffect(() => {
    setTimerData(getTimeRemaining(registerDate));

    const interval = setInterval(() => {
      setTimerData(getTimeRemaining(registerDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles.timer__item}>
        <span className={styles.timer__number}>{timerData.days || '00'}</span>
        <span className={styles.timer__text}>DAYS</span>
      </div>
      <span className={styles.timer__number}>:</span>
      <div className={styles.timer__item}>
        <span className={styles.timer__number}>{timerData.hours || '00'}</span>
        <span className={styles.timer__text}>HOURS</span>
      </div>
      <span className={styles.timer__number}>:</span>
      <div className={styles.timer__item}>
        <span className={styles.timer__number}>{timerData.minutes || '00'}</span>
        <span className={styles.timer__text}>MINUTES</span>
      </div>
      <span className={styles.timer__number}>:</span>
      <div className={styles.timer__item}>
        <span className={styles.timer__number}>{timerData.seconds || '00'}</span>
        <span className={styles.timer__text}>SECONDS</span>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('aircon');

  return {
    props: { page: page.data },
  };
}

export default Aircon;
