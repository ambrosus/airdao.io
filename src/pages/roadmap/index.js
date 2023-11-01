import {createClient} from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import {PrismicRichText} from '@prismicio/react';
import {useMemo, useState} from 'react';
import styles from './roadmap.module.scss';
import Post from '@/pages/roadmap/components/Post';
import {asText} from '@prismicio/client';

const filters = [
  { labelKey: 'other_label', key: 'other' },
  { labelKey: 'explorer_label', key: 'explorer' },
  { labelKey: 'apollo_label', key: 'apollo' },
  { labelKey: 'multisig_label', key: 'multisig' },
];

const Roadmap = ({ header, footerText, page }) => {
  const [selectedFilter, setSelectedFilter] = useState('apollo');
  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={`container ${styles.roadmap}`}>
        <div className={styles.filters}>
          {filters.map((el) => (
            <PrismicRichText
              key={el.key}
              field={page[el.labelKey]}
              components={{
                paragraph: ({ children }) => (
                  <button
                    className={`${styles.filter_btn} ${
                      el.key === selectedFilter ? styles.filter_btn_active : ''
                    }`}
                    onClick={() => setSelectedFilter(el.key)}
                  >
                    {children}
                  </button>
                ),
              }}
            />
          ))}
        </div>
        <div className={styles.posts}>
          {page[selectedFilter + '_list'].map((el) => (
            <Post data={el} key={asText(el.title)} />
          ))}
        </div>
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  )
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('roadmap');

  return {
    props: { header, footerText: footer, page: page.data },
  };
}

export default Roadmap;
