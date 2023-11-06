import styles from './project.module.scss';
import { Button } from '@airdao/ui-library';
import Link from 'next/link';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron.svg';

const Project = ({ data }) => {
  const handleRedirect = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(data.link, '_blank', 'noreferrer');
    }
  };

  return (
    data && (
      <div onClick={handleRedirect} className={styles.project}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.text}>{data.text}</p>
        <span className={styles.period}>1 month</span>
        <span className={styles.status}>Testing</span>
        <Link href={data.link} target="_blank" className={styles.btn}>
          <Button size="large" type="tetiary">
            Apply
            <Image src={chevron} alt="chevron" />
          </Button>
        </Link>
      </div>
    )
  );
};

export default Project;
