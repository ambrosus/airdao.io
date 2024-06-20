import Link from 'next/link';
import Image from 'next/image';
import blog from '@/assets/img/homepage/blog.svg';
import chevron from '@/assets/icons/chevron-grey.svg';
import styles from './rba.module.scss';

const items = [
  {
    icon: blog,
    title: 'Roadmap',
    description: 'Explore our vision and strategy for the future of AirDAO.',
  },
  {
    icon: blog,
    title: 'Blog',
    description:
      'Stay updated with the latest news, insights, and developments in the AirDAO ecosystem.',
  },
  {
    icon: blog,
    title: 'Academy',
    description:
      'Learn and grow with educational resources on blockchain and DeFi.',
  },
];

// TODO: add texts from prismic
const RoadmapBlogAcademy = () => {
  return (
    <section className="container">
      <div className={styles['rba-container']}>
        {items.map(item => (
          <div key={item.title} className={styles['rba-item']}>
            <Image src={item.icon} alt={item.title} />
            <div className={styles['title-description']}>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
            <Image src={chevron} alt="Continue button" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapBlogAcademy;
