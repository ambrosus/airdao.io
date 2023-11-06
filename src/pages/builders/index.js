import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './builders.module.scss';
import Project from '@/pages/builders/components/Project';
import { Button } from '@airdao/ui-library';
import Image from 'next/image';
import idea from './idea.svg';
import touch from './touch.svg';
import Pagination from '@/components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import striped from './striped.svg';
import chevron from '@/assets/icons/chevron.svg';

let _window;

if (typeof window !== 'undefined') {
  _window = window;
}

const projects = [
  {
    title: '1Oracle',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
  {
    title: '2On-and-off ramp',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
  {
    title: '3NFT marketplace',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
  {
    title: '4Oracle',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
  {
    title: '5Oracle',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
  {
    title: '6Oracle',
    text: 'Bring real world data to smart contracts.',
    link: 'https://google.com/',
  },
];

const itemsPerPage = 3;

const Builders = ({ header, footerText }) => {
  const [renderedList, setRenderedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (_window && _window.innerWidth < 768) {
      const startIdx = (currentPage - 1) * itemsPerPage;
      const finishIdx = currentPage * itemsPerPage;
      setRenderedList(projects.slice(startIdx, finishIdx));
    } else {
      setRenderedList(projects);
    }
  }, [currentPage]);

  const handlePage = (page) => setCurrentPage(page);

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles.builders}>
        <div className={styles.hero}>
          <Image src={striped} alt="" className={styles.striped} />
          <h1 className={styles.hero_title}>
            The next frontier for web3 builders
          </h1>
          <p className={styles.hero_subtitle}>
            Discover your role in our ecosystem. Create, innovate, and make a
            difference.
          </p>
        </div>
        <div className={styles.projects}>
          <div className="container">
            <h2 className={styles.projects_title}>
              Select a project and apply to build
            </h2>
            <div className={styles.projects_list}>
              {renderedList.map((el, i) => (
                <Project data={el} key={i} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePage}
              totalPages={2}
              className={styles.pagination}
            />
            <p className={styles.projects_text}>
              We’re looking for crypto-native builders to expand our ecosystem.
              <br />
              <br />
              Our EVM-compatible layer-one blockchain boasts 100% uptime since
              launch and is future-proofed with high scalability, rapid
              transactions, and low fees. It’s every developer&apos;s dream
              blockchain to build on.
            </p>
          </div>
        </div>
        <div className={`container ${styles.ideas}`}>
          <div className={styles.idea}>
            <div className={styles.idea_info}>
              <p className={styles.idea_title}>
                What would you like to see built on AirDAO?
              </p>
              <Button size="large" type="tetiary" className={styles.idea_btn}>
                Submit an idea
                <Image src={chevron} alt="chevron" />
              </Button>
            </div>
            <Image src={idea} alt="idea" className={styles.idea_img} />
          </div>
          <div className={`${styles.idea} ${styles.touch}`}>
            <div className={styles.idea_info}>
              <p className={styles.idea_title}>Bring your project to AirDAO</p>
              <Button size="large" type="tetiary" className={styles.idea_btn}>
                Get in touch
                <Image src={chevron} alt="chevron" />
              </Button>
            </div>
            <Image src={touch} alt="idea" className={styles.touch_img} />
          </div>
        </div>
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
          className={styles.footer}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { header, footerText: footer },
  };
}

export default Builders;
