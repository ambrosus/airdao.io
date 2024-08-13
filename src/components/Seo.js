import Head from 'next/head';

const Seo = ({
  title,
  description,
  preload,
  image = 'https://airdao.io/og.png',
}) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" />
      {preload && <link rel="preload" href={preload.src} as="image" />}
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
