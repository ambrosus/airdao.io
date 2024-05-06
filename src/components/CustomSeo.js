import Head from 'next/head';

const CustomSeo = ({ siteName, data }) => {
  return (
    <Head>
      {data && data?.title.length > 0 && (
        <title>{data.title[0]?.text + ` | ${siteName}`}</title>
      )}
      {data && data?.description.length > 0 && (
        <meta name="description" content={data.description[0]?.text} />
      )}
    </Head>
  );
};

export default CustomSeo;
