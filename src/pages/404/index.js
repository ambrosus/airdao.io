import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import img from './image.svg';
import circles from './circles.svg';
import styles from './404.module.scss';
import Link from 'next/link';
export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });

  const header = await client.getSingle('header');
  const footerText = await client.getSingle('footer');

  return {
    props: { header, footerText },
  };
}
export default function Custom404({ header, footerText }) {
  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles['not-found']}>
        <Image
          layout="fill"
          src={circles}
          alt="circles"
          className={styles['not-found__circles']}
        />
        <Image
          layout="fill"
          src={img}
          alt="not found"
          className={styles['not-found__img']}
        />
        <p className={styles['not-found__text']}>
          The page you are looking for may have been moved, deleted, or possibly
          never existed
        </p>
        <Link href="/" className={styles['not-found__home']}>
          Go home
        </Link>
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
}
